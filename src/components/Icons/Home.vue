<template>
  <div class="icon-wrapp">
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z" :fill="color" />
    </svg>
  </div>
</template>

<script>
import { colors } from '../../assets/styles'

export default {
  name: 'HomeIcon',

  props: {
    color: {
      type: String,
      default: colors.mainBlack.black,
    },
  },
}
</script>

<style>
.icon-wrapp {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
