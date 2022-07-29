<template>
  <div class="collapsed-container">
    <div class="collapsed-container__header" @click="switchVisibility">
      <div :class="['header__chevron-wrap', isHidden ? '' : 'chevronDown']">
        <ChevronUp />
      </div>
      <h2 class="header__text">{{ headerText }}</h2>
    </div>

    <div :class="['collapsed-container__content', isHidden ? '' : 'visible']">
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
    transition-duration: 0.3s;
    transform: translateY(-50px);
    overflow: hidden;
    opacity: 0;
    height: 0;
  }

  .visible {
    transform: translateY(0);
    opacity: 1;
    height: auto;
  }
}
</style>
