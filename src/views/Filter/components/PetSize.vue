<template>
  <section class="pet-size">
    <p class="pet-size__label">{{ label }}</p>
    <div class="pet-size__buttons-group">
      <ul>
        <li v-for="(buttonItem, index) in buttonsList" :key="index">
          <rounded-button
            :text="buttonItem"
            :clickHandler="() => clickHandler(buttonItem)"
            :backgroundColor="
              buttonItem === selectedValue ? '#FF9F0A' : '#F7F7F6'
            "
            :color="buttonItem === selectedValue ? '#ffffff' : '#000000'"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import RoundedButton from '@/components/Buttons/Rounded.vue'
import { text } from '@/mock/engText'

export default {
  name: 'PetSize',
  components: { RoundedButton },
  props: {
    selectedValue: {
      type: String,
      required: true,
    },
    clickHandler: {
      type: Function,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      buttonsList: [text.common.small, text.common.medium, text.common.large],
    }
  },
}
</script>

<style scoped lang="scss">
.pet-size {
  margin-bottom: 20px;

  .pet-size__label {
    font-size: 14px;
    line-height: 16px;
  }

  .pet-size__buttons-group {
    margin-top: 15px;

    ul {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
