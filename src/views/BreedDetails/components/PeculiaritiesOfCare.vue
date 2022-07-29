<template>
  <section class="peculiarities-container">
    <ul class="peculiarities-container__peculiarities-list">
      <li
        v-for="(peculiarities, index) in peculiaritiesArray"
        :key="index"
        class="peculiarities-list__item"
      >
        <p class="item__label">{{ peculiarities.label }}:</p>
        <p class="item__value">{{ peculiarities.value }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import { ref } from 'vue'
import { text } from '@/mock/engText'

export default {
  name: 'PeculiaritiesOfCare',
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const peculiaritiesArray = ref(
      Object.entries(props.options).map((item) => ({
        label: text.petDetailsPage[item[0]],
        value:
          typeof item[1] === 'boolean'
            ? item[1]
              ? 'Necessary'
              : 'Not necessary'
            : item[1],
      }))
    )

    return { peculiaritiesArray }
  },
}
</script>

<style scoped lang="scss">
.peculiarities-container {
  margin-top: 15px;

  .peculiarities-container__peculiarities-list {
    .peculiarities-list__item {
      display: flex;
      margin-bottom: 10px;
      :last-of-type {
        margin-bottom: 0;
      }

      p {
        font-size: 14px;
        line-height: 16px;
      }

      .item__label {
        min-width: 150px;
        margin-right: 20px;
      }
    }
  }
}
</style>
