<template>
  <div class="filter-page">
    <div class="filter-page__header-section">
      <h1>{{ text.filterPage.filter }}</h1>
    </div>
    <form class="filter-page__form" @submit.prevent="resetForm">
      <div class="filter-page__input-section">
        <slider
          v-model="formData.timeSpend"
          :label="text.filterPage.timeOnAPet"
          :valueLabel="text.unitsOfMeasurement.minutes"
          max="150"
          step="2"
        />
      </div>

      <div class="filter-page__input-section">
        <slider
          v-model="formData.moneySpend"
          :label="text.filterPage.costPerMonth"
          :valueLabel="text.unitsOfMeasurement.money"
          max="300"
          step="5"
        />
      </div>

      <div class="filter-page__input-section">
        <slider
          v-model="formData.securityLevel"
          :label="text.filterPage.securityPet"
          valueLabel="%"
        />
      </div>

      <div class="filter-page__input-section">
        <pet-size
          :label="text.filterPage.securityPet"
          :selectedValue="formData.size"
          :clickHandler="sizeClickHandler"
        />
      </div>

      <section class="filter-page__toggles-section">
        <div class="toggles-section__toggle-component">
          <checkbox
            :label="text.filterPage.easeToTrain"
            v-model="formData.easeToTrain"
          />
        </div>

        <div class="toggles-section__toggle-component">
          <checkbox
            :label="text.filterPage.idealForFamily"
            v-model="formData.idealForFamily"
          />
        </div>

        <div class="toggles-section__toggle-component">
          <checkbox
            :label="text.filterPage.goodForFlat"
            v-model="formData.goodForFlat"
          />
        </div>
      </section>

      <section class="filter-page__submit-section">
        <div class="submit-section__button-wrap">
          <primary-button
            :text="text.common.apply"
            type="submit"
            :clickHandler="() => null"
          />
        </div>

        <div class="submit-section__button-wrap">
          <primary-button
            :text="text.common.reset"
            :clickHandler="resetForm"
            backgroundColor="#F7F7F6"
            color="#000000"
          />
        </div>
      </section>
    </form>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
import Checkbox from '@/components/Checkbox.vue'
import PrimaryButton from '@/components/Buttons/Primary.vue'
import PetSize from './components/PetSize.vue'
import { text } from '@/mock/engText'
import { FILTER_DATA } from '@/mock/filterData'

export default {
  name: 'FilterView',
  components: { Slider, PetSize, Checkbox, PrimaryButton },
  data() {
    return {
      text,
      formData: { ...FILTER_DATA },
    }
  },
  methods: {
    sizeClickHandler(newSize) {
      if (newSize === this.formData.size) {
        return
      }

      this.formData = { ...this.formData, size: newSize }
    },
    resetForm() {
      this.formData = { ...FILTER_DATA }
    },
  },
}
</script>

<style scoped lang="scss">
.filter-page {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  .filter-page__header-section {
    margin-bottom: 25px;
  }

  .filter-page__form {
    .filter-page__input-section {
      margin-bottom: 20px;
    }
  }

  .filter-page__toggles-section {
    width: 50%;
    margin-bottom: 50px;

    .toggles-section__toggle-component {
      margin-bottom: 15px;
    }
  }

  .filter-page__submit-section {
    display: flex;

    .submit-section__button-wrap:first-of-type {
      margin-right: 20px;
    }
  }
}
</style>
