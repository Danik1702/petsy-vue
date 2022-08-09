<template>
  <div class="pet-info" v-if="petInfo.breed">
    <section class="pet-info__header page-section">
      <section class="header__pet-section">
        <h1 class="pet-section__header">{{ petInfo.breed }}</h1>
        <div class="pet-section__slider">
          <img :src="petInfo.images[0]" alt="pet" />
        </div>
        <div class="pet-section__comparison-status">
          <ComparisonComponent :petInfo="petInfo" />
        </div>
      </section>

      <section class="header__characteristic">
        <h1 class="characteristic__header section-header">
          {{ text.petDetailsPage.characteristics }}
        </h1>
        <ul class="characteristic__list">
          <li
            v-for="(characteristic, index) in petCharacteristicsEntries"
            :key="index"
          >
            <PetCharacteristic :value="characteristic[1]">
              <p class="characteristic-text">
                {{ text.petDetailsPage[characteristic[0]] }}
              </p>
            </PetCharacteristic>
          </li>
        </ul>
      </section>
    </section>

    <section class="pet-info__observation page-section">
      <h2 class="section-header">{{ text.petDetailsPage.observation }}</h2>
      <div class="observation-container">
        <ul>
          <li v-for="(item, index) in petObservationEntries" :key="index">
            <PetObservation
              :label="text.petDetailsPage[item[0]]"
              :value="item[1]"
            />
          </li>
        </ul>
      </div>
    </section>

    <section class="pet-info__additional-info page-section">
      <h2 class="section-header">{{ text.common.aditionalInfo }}</h2>
      <div class="additional-info__about-breed additional-info-section">
        <CollapsedContainer :headerText="text.petDetailsPage.aboutABreed">
          <p class="about-breed__description">{{ petInfo.description }}</p>
        </CollapsedContainer>
      </div>

      <div class="additional-info-section">
        <CollapsedContainer
          :headerText="text.petDetailsPage.peculiaritiesOfCare"
        >
          <PeculiaritiesOfCare :options="petInfo.careFeatures" />
        </CollapsedContainer>
      </div>

      <div class="additional-info__possible_problems additional-info-section">
        <CollapsedContainer :headerText="text.petDetailsPage.posisibleProblems">
          <ul>
            <li
              v-for="(problem, index) in petInfo.possibleProblems"
              :key="index"
            >
              <p>{{ problem }}</p>
            </li>
          </ul>
        </CollapsedContainer>
      </div>
    </section>
  </div>

  <div v-else>LOADING...</div>
</template>

<script>
import ComparisonComponent from '@/components/Comparison.vue'
import PetCharacteristic from '@/components/PetCharacteristic.vue'
import PetObservation from '@/components/PetObservation.vue'
import CollapsedContainer from '@/components/CollapsedContainer.vue'
import PeculiaritiesOfCare from './components/PeculiaritiesOfCare.vue'
import { ROUTES } from '@/constants'
import { text } from '@/mock/engText'
import { getCorrectObservationData } from '@/helpers/getCorrectObservationData'

export default {
  name: 'BreedDetailsView',
  components: {
    ComparisonComponent,
    PetCharacteristic,
    PetObservation,
    CollapsedContainer,
    PeculiaritiesOfCare,
  },
  data() {
    return {
      ROUTES,
      text,
    }
  },
  computed: {
    breed() {
      return this.$route.params.breed
    },
    petInfo() {
      return this.$store.state.pet
    },
    petCharacteristicsEntries() {
      return Object.entries(this.petInfo.characteristics)
    },
    petObservationEntries() {
      return Object.entries(getCorrectObservationData(this.petInfo.observation))
    },
  },
  created() {
    this.dispatchPet()
  },
  methods: {
    dispatchPet() {
      this.$store.dispatch('getPetByBreed', this.breed).catch((error) => {
        console.log('error', error)
      })
    },
  },
}
</script>

<style scoped lang="scss">
.pet-info {
  .pet-info__header {
    border-radius: 8px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
    padding: 10px 55px 45px 9px;
    display: flex;
    justify-content: space-between;

    .header__pet-section {
      .pet-section__header {
        font-size: 28px;
        line-height: 33px;
        font-weight: 700;
        margin-left: 2px;
      }

      .pet-section__slider {
        width: 100%;
        max-width: 460px;
        height: 306px;
        margin: 16px 0 32px;
        border-radius: 8px;
        overflow: hidden;

        .img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .pet-section__comparison-status {
        display: flex;
        justify-content: center;
      }
    }

    .header__characteristic {
      margin-top: 9px;
      width: 100%;
      max-width: 375px;

      .characteristic__list {
        display: flex;
        flex-direction: column;

        li {
          margin-bottom: 25px;

          .characteristic-text {
            font-size: 16px;
            line-height: 19px;
          }
        }
      }
    }
  }

  .pet-info__observation {
    .observation-container {
      ul {
        display: flex;

        li {
          margin-right: 30px;
        }
      }
    }
  }

  .pet-info__additional-info {
    max-width: 60%;

    .additional-info__about-breed {
      .about-breed__description {
        font-size: 14px;
        line-height: 16px;
        margin-top: 15px;
        text-align: justify;
      }
    }
  }

  .additional-info__possible_problems {
    ul {
      margin-top: 15px;

      li {
        margin-bottom: 10px;
        :last-of-type {
          margin-bottom: 0;
        }

        p {
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
  }
}

.section-header {
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  margin-bottom: 20px;
}

.page-section {
  margin-bottom: 30px;
}

.additional-info-section {
  margin-bottom: 20px;
}
</style>
