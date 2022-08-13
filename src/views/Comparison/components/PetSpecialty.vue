<template>
  <div class="specialty">
    <slot></slot>

    <p class="specialty__text">{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'PetSpecialty',
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.specialty {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .specialty__text {
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
  }
}
</style>
