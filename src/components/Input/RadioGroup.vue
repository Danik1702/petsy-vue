<template>
  <section class="radio-group-wrap">
    <h3 class="radio-group-wrap__header">{{ header }}</h3>

    <ul class="radio-group-wrap__options-list">
      <li
        class="options-list__item"
        v-for="(option, index) in options"
        :key="index"
      >
        <radio
          :name="name"
          :label="option.label"
          :modelValue="modelValue"
          :value="option.value"
          @update:modelValue="$emit('update:modelValue', $event)"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import Radio from './Radio.vue'

export default {
  name: 'RadioGroup',
  components: { Radio },
  props: {
    header: {
      type: String,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.radio-group-wrap {
  .radio-group-wrap__header {
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    margin-left: 5px;
  }

  .radio-group-wrap__options-list {
    .options-list__item {
      margin-bottom: 12px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
