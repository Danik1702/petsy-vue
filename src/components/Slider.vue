<template>
  <section class="slider-component">
    <p class="slider-component__label">{{ label }}</p>
    <div class="slider-component__range">
      <p
        class="range__label"
        :style="{
          left: `${(modelValue * 100) / Number(max) - 2.5}%`,
          display: `${(modelValue * 100) / Number(max) > 0 ? 'block' : 'none'}`,
        }"
      >
        {{ `${modelValue}${valueLabel}` }}
      </p>
      <input
        type="range"
        v-bind="{ ...$attrs, onChange: updateValue }"
        :id="uuid"
        :value="modelValue"
        :max="max"
        class="range__slider"
        :step="step"
      />
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import SetupFormComponent from '@/helpers/setupFormComponent'
import UniqueID from '@/helpers/uniqueID'

export default {
  name: 'Slider',
  props: {
    modelValue: {
      type: [String, Number],
    },
    label: {
      type: String,
      required: true,
    },
    max: {
      type: String,
      default: '100',
    },
    valueLabel: {
      type: String,
      required: true,
    },
    step: {
      type: String,
      default: '1',
    },
  },
  setup(props, context) {
    const uuid = UniqueID().getID()
    const { updateValue } = SetupFormComponent(props, context)
    let leftValue = ref(0)

    return {
      updateValue,
      uuid,
      leftValue,
    }
  },
}
</script>

<style scoped lang="scss">
.slider-component {
  .slider-component__label {
    font-size: 14px;
    line-height: 16px;
    margin-left: 5px;
  }

  .slider-component__range {
    margin-top: 10px;
    position: relative;

    .range__label {
      position: absolute;
      top: -25px;
      left: -5px;
      padding: 3px 5px;
      border-radius: 4px;
      background-color: #ff9f0a;
      color: #ffffff;
    }

    .range__slider {
      width: 100%;
    }
  }
}
</style>
