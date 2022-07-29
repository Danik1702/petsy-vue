<template>
  <section class="observation-container">
    <p class="observation-container__label">{{ label }}</p>
    <p class="observation-container__value">{{ value }}</p>
  </section>
</template>

<script>
export default {
  name: 'PetObservation',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.observation-container {
  display: flex;
  flex-direction: column;

  .observation-container__label {
    font-size: 12px;
    line-height: 14px;
    font-weight: 500;
    color: #8e8e93;
    margin-bottom: 5px;
  }

  .observation-container__value {
    font-size: 14px;
    line-height: 16px;
    color: #1f1712;
  }
}
</style>
