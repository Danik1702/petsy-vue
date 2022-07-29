<template>
  <div class="toggle">
    <p class="toggle__label">{{ label }}</p>
    <input
      v-bind="{ ...$attrs, onChange: updateValue }"
      :checked="modelValue"
      :id="uuid"
      type="checkbox"
    />
  </div>
</template>

<script>
import SetupFormComponent from '@/helpers/setupFormComponent'
import UniqueID from '@/helpers/uniqueID'

export default {
  name: 'Chexkbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const uuid = UniqueID().getID()
    const { updateValue } = SetupFormComponent(props, context)

    return {
      updateValue,
      uuid,
    }
  },
}
</script>

<style scoped lang="scss">
.toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .toggle__label {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
