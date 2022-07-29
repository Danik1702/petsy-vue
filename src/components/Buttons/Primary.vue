<template>
  <button
    class="primary-button"
    :style="{ backgroundColor }"
    @click="clickHandler"
    :type="type"
  >
    <p class="primary-button__text" :style="{ color }">{{ text }}</p>
  </button>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    clickHandler: {
      type: Function,
      required: true,
    },
    backgroundColor: {
      type: [String, Boolean],
      default: '#FF9F0A',
    },
    color: {
      type: [String, Boolean],
      default: '#ffffff',
    },
    type: {
      type: String,
      default: 'button',
    },
  },
}
</script>

<style scoped lang="scss">
.primary-button {
  box-sizing: border-box;
  padding: 0 20px;
  outline: none;
  border: none;
  cursor: pointer;
  height: 32px;
  border-radius: 5px;

  .primary-button__text {
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
  }
}
</style>
