<template>
  <section class="comparison-container">
    <div
      v-if="isPetAddedToComparison"
      class="comparison-container__added-to-comparison"
    >
      <div class="added-to-comparison__item">
        <PointMarkIcon />
        <p class="item__added-text text ml-10">{{ text.common.added }}</p>
      </div>

      <div class="added-to-comparison__item">
        <router-link :to="{ name: ROUTES.comparison }">
          <LikeAndDislikeIcon color="#0A84FF" />
          <p class="item__goto-text text ml-10">{{ text.common.goTo }}</p>
        </router-link>
      </div>

      <div class="added-to-comparison__item">
        <button
          class="item__button button"
          @click="handleRemovePetFromComparison"
        >
          <CrossIcon color="#FF453A" />
          <p class="button__remove-text text ml-10">{{ text.common.remove }}</p>
        </button>
      </div>
    </div>
    <button
      v-else
      class="comparison-container__add-to-comparison-button button"
      @click="hanldeAddPetToComparison"
    >
      <p class="add-to-comparison-button__text text">
        {{ text.breedsPage.addToComparison }}
      </p>
    </button>
  </section>
</template>

<script>
import CrossIcon from '@/components/Icons/Cross.vue'
import PointMarkIcon from '@/components/Icons/PointMark.vue'
import LikeAndDislikeIcon from '@/components/Icons/LikeAndDislike.vue'
import { text } from '@/mock/engText'
import { ROUTES } from '@/constants'

export default {
  name: 'ComparisonComponent',
  components: { CrossIcon, PointMarkIcon, LikeAndDislikeIcon },
  props: {
    petInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      text,
      ROUTES,
    }
  },
  computed: {
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
    hanldeAddPetToComparison() {
      this.$store.dispatch('addPetToComparison', this.petInfo)
    },
  },
}
</script>

<style scoped lang="scss">
.text {
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
}

.ml-10 {
  margin-left: 10px;
}

.button {
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
}

.comparison-container {
  .comparison-container__added-to-comparison {
    display: flex;
    align-items: center;

    .added-to-comparison__item {
      display: flex;
      align-items: center;
      margin-right: 30px;

      .item__added-text {
        color: #000000;
        font-weight: 400;
      }

      .item__goto-text {
        color: #0a84ff;
      }

      .button__remove-text {
        color: #ff453a;
      }

      a,
      button {
        display: flex;
        align-items: center;
      }
    }
  }

  .comparison-container__add-to-comparison-button {
    .add-to-comparison-button__text {
      color: #0a84ff;
      cursor: pointer;
    }
  }
}
</style>
