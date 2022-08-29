<template>
  <section class="select-wrap">
    <label class="select-wrap__label" v-if="label" :for="uuid">{{
      label
    }}</label>

    <select
      class="select-wrap__select"
      v-bind="{
        ...$attrs,
        onChange: updateValue,
      }"
      :value="modelValue"
      :id="uuid"
    >
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
  </section>
</template>

<script>
import SetupFormComponent from '@/helpers/setupFormComponent'
import UniqueID from '@/helpers/uniqueID'

export default {
  name: 'Select',
  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Number],
    },
    label: {
      type: String,
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
.select-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .select-wrap__label {
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 10px;
    margin-left: 5px;
  }

  .select-wrap__select {
    border-radius: 8px;
    padding: 0 10px;
    box-sizing: border-box;
    width: 100%;
    height: 28px;
    font-size: 14px;
    line-height: 16px;
    border: none;
    outline: none;
    background-color: #f7f7f6;
    border: 1px solid #f7f7f6;
    cursor: pointer;

    background-image: url('../../assets/img/select-arrow.png');
    background-repeat: no-repeat;
    background-position: calc(100% - 10px) center;
    background-size: 20px;

    &:focus {
      border: 1px solid #ff9f0a;
      background-color: #ffffff;
      box-shadow: 0px 1px 15px #ff9f0a;
    }

    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }
}
</style>
