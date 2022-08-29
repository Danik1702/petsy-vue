<template>
  <section class="care-option-result">
    <h4 class="care-option-result__header">{{ header }}</h4>

    <div
      :class="[
        careOptionResultObj.careOptionResultClass,
        'care-option-result__result-container',
      ]"
    >
      <h3 class="result-container__header">
        {{ careOptionResultObj.normValueText }}
      </h3>
      <p class="result-container__norm-text">{{ normText }}</p>
    </div>
  </section>
</template>

<script>
import { getCareOptionResult } from '../helpers/getCareOptionResult'

export default {
  name: 'CareOptionResult',
  props: {
    header: {
      type: String,
      required: true,
    },
    normText: {
      type: String,
      required: true,
    },
    option: {
      type: String,
      required: true,
    },
    normValue: {
      type: [String, Number],
      required: true,
    },
    inputValue: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    careOptionResultObj() {
      return getCareOptionResult({
        option: this.option,
        normValue: this.normValue,
        inputValue: this.inputValue,
      })
    },
  },
}
</script>

<style scoped lang="scss">
.care-option-result {
  width: 100%;

  .care-option-result__header {
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .care-option-result__result-container {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;

    .result-container__header {
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      margin-bottom: 10px;
    }

    .result-container__norm-text {
      font-size: 14px;
      line-height: 16px;
      color: #c4c4c4;
    }
  }

  .good-result-bg {
    background: linear-gradient(
      270deg,
      #e6ffe2 0%,
      rgba(255, 255, 255, 0) 100%
    );

    h3 {
      color: #30d158;
    }
  }

  .medium-result-bg {
    background: linear-gradient(
      270deg,
      #ffe9c7 0%,
      rgba(255, 255, 255, 0) 100%
    );

    h3 {
      color: #ff9f0a;
    }
  }

  .bad-result-bg {
    background: linear-gradient(
      270deg,
      #ffb1ae 0%,
      rgba(255, 255, 255, 0) 100%
    );

    h3 {
      color: #ff453a;
    }
  }
}
</style>
