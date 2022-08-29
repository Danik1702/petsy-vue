<template>
  <section class="radio">
    <input
      type="radio"
      v-bind="{ ...$attrs, onChange: updateValue }"
      :checked="modelValue === value"
      :id="uuid"
    />

    <label class="radio__label" :for="uuid">{{ label }}</label>
  </section>
</template>

<script>
import SetupFormComponent from '@/helpers/setupFormComponent'
import UniqueID from '@/helpers/uniqueID'

export default {
  name: 'Radio',
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
    },
    value: {
      type: [String, Number],
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
.radio {
  display: flex;
  align-items: center;

  input {
    cursor: pointer;
  }

  .radio__label {
    margin-left: 10px;
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
