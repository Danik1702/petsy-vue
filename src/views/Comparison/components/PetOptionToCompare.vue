<template>
  <section class="pet-option-to-compare">
    <h3 class="pet-option-to-compare__header">
      {{ header }}
    </h3>

    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'PetOptionToCompare',
  props: {
    header: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.pet-option-to-compare {
  width: 100%;
  margin-bottom: 30px;

  .pet-option-to-compare__header {
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    margin-bottom: 15px;
  }
}
</style>
