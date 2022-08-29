<template>
  <div class="collapsed-container">
    <div class="collapsed-container__header" @click="switchVisibility">
      <div :class="['header__chevron-wrap', isHidden ? '' : 'chevronDown']">
        <ChevronUp />
      </div>
      <h2 class="header__text">{{ headerText }}</h2>
    </div>

    <div
      :class="['collapsed-container__content', isHidden ? '' : 'visible']"
      ref="collapsedContainer"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ChevronUp from '@/assets/icons/ChevronUp.vue'

export default {
  name: 'CollapsedContainer',
  components: { ChevronUp },
  props: {
    headerText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isHidden: true,
    }
  },
  methods: {
    switchVisibility() {
      this.isHidden = !this.isHidden
    },
  },
  watch: {
    isHidden() {
      const collapsedElem = this.$refs.collapsedContainer

      if (this.isHidden) {
        collapsedElem.style.maxHeight = 0
      } else {
        collapsedElem.style.maxHeight = `${collapsedElem.scrollHeight}px`
      }
    },
  },
}
</script>

<style scoped lang="scss">
.collapsed-container {
  .collapsed-container__header {
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    .header__chevron-wrap {
      transform: rotateX(180deg);
      margin-right: 10px;
      transition-duration: 0.5s;
    }

    .chevronDown {
      transform: rotateX(0deg);
    }

    .header__text {
      font-size: 20px;
      line-height: 24px;
      font-weight: 400;
    }
  }

  .collapsed-container__content {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease-out;
  }

  .visible {
    max-height: 100px;
  }
}
</style>
