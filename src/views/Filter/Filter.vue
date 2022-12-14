<template>
  <div class="filter-page">
    <div class="filter-page__header-section">
      <h1>{{ text.filterPage.filter }}</h1>
    </div>
    <form class="filter-page__form" @submit.prevent="handleSubmit">
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
            :clickHandler="handleResetForm"
            backgroundColor="#F7F7F6"
            color="#000000"
          />
        </div>
      </section>
    </form>
  </div>
</template>

<script>
import Slider from '@/components/Input/Slider.vue'
import Checkbox from '@/components/Input/Checkbox.vue'
import PrimaryButton from '@/components/Buttons/Primary.vue'
import PetSize from './components/PetSize.vue'
import { text } from '@/mock/engText'
import { FILTER_DATA } from '@/mock/filterData'
import { ROUTES } from '@/constants'

export default {
  name: 'FilterView',
  components: { Slider, PetSize, Checkbox, PrimaryButton },
  data() {
    return {
      text,
      formData: { ...FILTER_DATA },
    }
  },
  created() {
    if (this.$route.query.size) {
      const {
        timeSpend,
        moneySpend,
        securityLevel,
        size,
        easeToTrain,
        idealForFamily,
        goodForFlat,
      } = this.$route.query

      this.formData = {
        timeSpend: Number(timeSpend),
        moneySpend: Number(moneySpend),
        securityLevel: Number(securityLevel),
        size,
        easeToTrain: JSON.parse(easeToTrain),
        idealForFamily: JSON.parse(idealForFamily),
        goodForFlat: JSON.parse(goodForFlat),
      }
    }
  },
  methods: {
    sizeClickHandler(newSize) {
      if (newSize === this.formData.size) {
        return
      }

      this.formData = { ...this.formData, size: newSize }
    },
    handleResetForm() {
      this.formData = { ...FILTER_DATA }
      this.$router.push({ query: null })
    },
    handleSubmit() {
      this.$router.push({ query: this.formData })
      setTimeout(() => {
        this.$router.push({ name: ROUTES.breeds, query: this.formData })
      }, 0)
    },
  },
}
</script>

<style scoped lang="scss">
.filter-page {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  box-sizing: border-box;

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

@media only screen and (max-width: 768px) {
  .filter-page {
    padding: 0 15px;
  }
}
</style>
