<template>
  <section class="text-input">
    <label class="text-input__label" :for="uuid" v-if="label">{{
      label
    }}</label>

    <input
      class="text-input__input"
      v-bind="{
        ...$attrs,
        onInput: updateValue,
      }"
      :id="uuid"
      :value="modelValue"
      :placeholder="placeholder"
      @keypress="isNumber"
    />
  </section>
</template>

<script>
import SetupFormComponent from '@/helpers/setupFormComponent'
import UniqueID from '@/helpers/uniqueID'

export default {
  name: 'TextInput',
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const { updateValue } = SetupFormComponent(props, context)
    const uuid = UniqueID().getID()

    return {
      updateValue,
      uuid,
    }
  },
  methods: {
    isNumber: function (e) {
      e = e ? e : window.event

      let charCode = e.which ? e.which : e.keyCode
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        e.preventDefault()
      } else {
        return true
      }
    },
  },
}
</script>

<style scoped lang="scss">
.text-input {
  width: 100%;
  display: flex;
  flex-direction: column;

  .text-input__label {
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 10px;
    margin-left: 5px;
  }

  .text-input__input {
    padding: 0 10px;
    box-sizing: border-box;
    width: 100%;
    height: 28px;
    background-color: #f7f7f6;
    border-radius: 8px;
    border: 1px solid #f7f7f6;
    font-size: 14px;
    outline: none;

    &:focus {
      border: 1px solid #ff9f0a;
      background-color: #ffffff;
      box-shadow: 0px 1px 15px #ff9f0a;
    }
  }
}
</style>
