<template>
  <section class="comparison-container">
    <div v-if="isPetAdded" class="comparison-container__added-to-comparison">
      <div class="added-to-comparison__item">
        <PointMarkIcon />
        <p class="item__added-text text ml-10"></p>
      </div>

      <div class="added-to-comparison__item">
        <router-link :to="{ name: gotoLinkName }">
          <LikeAndDislikeIcon color="#0A84FF" />
          <p class="item__goto-text text ml-10"></p>
        </router-link>
      </div>

      <div class="added-to-comparison__item" :click="removeCallback">
        <button class="item__button button">
          <CrossIcon />
          <p class="button__remove-text text ml-10"></p>
        </button>
      </div>
    </div>
    <button
      v-else
      class="comparison-container__add-to-comparison-button button"
    >
      <p class="add-to-comparison-button__text text">
        {{ text.breedsPage.addToComparison }}
      </p>
    </button>
  </section>
</template>

<script>
import CrossIcon from '@/assets/icons/Cross.vue'
import PointMarkIcon from '@/assets/icons/PointMark.vue'
import LikeAndDislikeIcon from '@/assets/icons/LikeAndDislike.vue'
import { text } from '@/mock/engText'

export default {
  name: 'ComparisonComponent',
  components: { CrossIcon, PointMarkIcon, LikeAndDislikeIcon },
  props: {
    isPetAdded: {
      type: Boolean,
      default: false,
    },
    gotoLinkName: {
      type: String,
    },
    removeCallback: {
      type: Function,
    },
  },
  data() {
    return {
      text,
    }
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

      .item__remove-text {
        color: #ff453a;
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
