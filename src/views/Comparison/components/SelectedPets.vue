<template>
  <section class="selected-pets">
    <ul class="selected-pets__list">
      <li v-for="pet in petsToCompare" :key="pet.id" class="list__item">
        <div class="item__image-wrap">
          <img :src="pet.images[0]" alt="pet" />
        </div>
        <p class="item__breed-name">{{ pet.breed }}</p>
        <div class="item__icon-wrap" @click="removePetHandler(pet.id)">
          <cross-icon />
        </div>
      </li>

      <router-link :to="{ name: ROUTES.breeds }">
        <li class="list__item list__add-button-wrap">
          <plus-icon />
          <p class="add-button__text">{{ text.comparisonPage.add }}</p>
        </li>
      </router-link>
    </ul>
  </section>
</template>

<script>
import CrossIcon from '@/assets/icons/Cross.vue'
import PlusIcon from '@/assets/icons/Plus.vue'
import { text } from '@/mock/engText'
import { ROUTES } from '@/constants'

export default {
  name: 'SelectedPets',
  components: { CrossIcon, PlusIcon },
  props: {
    petsToCompare: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      text,
      ROUTES,
    }
  },
  methods: {
    removePetHandler(petId) {
      this.$store.dispatch('removePetFromComparison', petId)
    },
  },
}
</script>

<style scoped lang="scss">
.selected-pets {
  .selected-pets__list {
    display: flex;
    flex-wrap: wrap;

    .list__item {
      height: 45px;
      display: flex;
      align-items: center;
      margin-right: 10px;
      margin-bottom: 5px;
      padding: 0 50px 0 10px;
      position: relative;
      border-radius: 25px;
      background-color: #e1f6ff;

      .item__image-wrap {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;

        img {
          max-width: 100%;
          height: 30px;
          object-fit: cover;
        }
      }

      .item__breed-name {
        font-size: 14px;
        line-height: 16px;
      }

      .item__icon-wrap {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -12px;
      }
    }

    .list__add-button-wrap {
      background-color: #e5ffe1;
      cursor: pointer;
      padding: 0 16px;

      .add-button__text {
        font-size: 16px;
        line-height: 19px;
        font-weight: 500;
        margin-left: 5px;
      }
    }
  }
}
</style>
