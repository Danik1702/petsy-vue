<template>
  <button
    class="rounded-button"
    :style="{ backgroundColor }"
    @click="clickHandler"
    :type="type"
  >
    <p class="rounded-button__text" :style="{ color }">{{ text }}</p>
  </button>
</template>

<script>
export default {
  name: 'RoundedButton',
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
.rounded-button {
  border: none;
  outline: none;
  box-sizing: border-box;
  min-width: 75px;
  padding: 0 10px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;

  .rounded-button__text {
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
  }
}
</style>
