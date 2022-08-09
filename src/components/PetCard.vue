<template>
  <div class="pet-card">
    <router-link
      :to="{ name: ROUTES.breedDetails, params: { breed: petInfo.breed } }"
    >
      <h1 class="pet-card__header">{{ petInfo.breed }}</h1>
      <section class="pet-card__images-container">
        <div class="images-container__main-image">
          <img :src="mainImage" :alt="`main ${petInfo.breed} image`" />
        </div>
        <section class="images-container__minor-images-container">
          <div class="minor-images-container__image">
            <img :src="petInfo.images[1]" :alt="`${petInfo.breed} image`" />
          </div>
          <div class="minor-images-container__image">
            <img :src="petInfo.images[2]" :alt="`${petInfo.breed} image`" />
          </div>
        </section>
      </section>
      <section class="pet-card__characteristics">
        <ul>
          <li
            v-for="({ label, value }, index) in characteristicsArray"
            :key="index"
          >
            <PetObservation :label="label" :value="value" />
          </li>
        </ul>
      </section>
    </router-link>
    <div class="pet-card__comparison">
      <ComparisonComponent :petInfo="petInfo" />
    </div>
  </div>
</template>

<script>
import PetObservation from './PetObservation.vue'
import ComparisonComponent from './Comparison.vue'
import { getPetSizeBasedOnValue } from '@/helpers/getPetSizeBasedOnValue'
import { ROUTES } from '@/constants'
import { text } from '@/mock/engText'

export default {
  name: 'PetCard',
  components: { PetObservation, ComparisonComponent },
  props: {
    petInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ROUTES,
    }
  },
  computed: {
    mainImage() {
      return this.petInfo.images[0]
    },
    characteristicsArray() {
      const {
        observation: { careTime, maintenanceCost },
        characteristics: { size },
      } = this.petInfo

      return [
        {
          value: `${careTime} ${text.unitsOfMeasurement.hoursPerDay}`,
          label: text.breedsPage.careTime,
        },
        {
          value: `${maintenanceCost} ${text.unitsOfMeasurement.moneyPerMonth}`,
          label: text.breedsPage.costs,
        },
        {
          value: getPetSizeBasedOnValue(size),
          label: text.breedsPage.size,
        },
      ]
    },
    isPetAddedToComparison() {
      return this.$store.state.petsToComparison
        .map((pet) => pet.id)
        .includes(this.petInfo.id)
    },
  },
  methods: {
    handleRemovePetFromComparison() {
      this.$store.dispatch('removePetFromComparison', this.petInfo.id)
    },
  },
}
</script>

<style scoped lang="scss">
.pet-card {
  background-color: #ffffff;
  width: 100%;
  max-width: 492px;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.25);
  transition-duration: 0.5s;

  .pet-card__header {
    color: #000000;
    font-size: 24px;
    line-height: 27px;
    font-weight: 700;
    padding: 13px 0 20px 35px;
  }

  .pet-card__images-container {
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .images-container__main-image {
      height: 238px;
      width: 76.4%;
      border-radius: 5px;
      overflow: hidden;
    }

    .images-container__minor-images-container {
      height: 238px;
      width: 21.1%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .minor-images-container__image {
        height: 112px;
        overflow: hidden;
        border-radius: 5px;
      }
    }
  }

  .pet-card__characteristics {
    margin-left: 35px;

    ul {
      display: flex;

      li {
        margin-right: 20px;
      }
    }
  }

  .pet-card__comparison {
    padding: 25px 0 25px 35px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(105%);
  }
}
</style>
