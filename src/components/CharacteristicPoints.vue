<template>
  <section class="characteristic-value">
    <ul>
      <li
        v-for="(characteristicPoint, index) in characteristicPoints"
        :key="index"
      >
        <div
          :class="[
            'characteristic-point',
            characteristicPoint ? characteristicClass : '',
          ]"
        ></div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'CharacteristicPoints',
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    characteristicPoints() {
      const arr = []

      for (let i = 1; i <= 5; i++) {
        this.value >= i ? arr.push(true) : arr.push(false)
      }

      return arr
    },
    characteristicClass() {
      if (this.value < 2) {
        return 'bad-result'
      }

      if (this.value >= 2 && this.value < 4) {
        return 'medium-result'
      }

      return 'good-result'
    },
  },
}
</script>

<style scoped lang="scss">
.characteristic-value {
  ul {
    display: flex;

    .characteristic-point {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #e4e4e4;
      margin-left: 10px;
    }

    .good-result {
      background-color: #30d158;
    }

    .medium-result {
      background-color: #ff9f0a;
    }

    .bad-result {
      background-color: #ff453a;
    }
  }
}
</style>
