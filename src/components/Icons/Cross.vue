<template>
  <div class="icon-wrapp">
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
        :fill="color"
      />
    </svg>
  </div>
</template>

<script>
import { colors } from '../../assets/styles'

export default {
  name: 'CrossIcon',

  props: {
    color: {
      type: String,
      default: colors.mainBlack.black,
    },
  },
}
</script>
