<template>
  <div class="characteristic">
    <slot></slot>
    <characteristic-points :value="value" />
  </div>
</template>

<script>
import CharacteristicPoints from './CharacteristicPoints.vue'

export default {
  name: 'PetCharacteristic',
  components: { CharacteristicPoints },
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.characteristic {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
