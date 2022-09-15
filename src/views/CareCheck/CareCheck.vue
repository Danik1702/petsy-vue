<template>
  <div class="care-check-page">
    <form
      class="care-check-page__care-check-form"
      @submit.prevent="handleSubmit"
      v-if="!selectedBreed"
    >
      <section class="care-check-form__breed-details-section">
        <h1 class="breed-details-section__header">
          {{ text.careCheckPage.pageHeader }}
        </h1>

        <div class="breed-details-section__image-wrap">
          <dog-avatar-icon />
        </div>

        <div class="breed-details-section__breed-select">
          <Select
            :label="text.careCheckPage.breed"
            :options="petBreeds"
            v-model="formData.breed"
          />
        </div>

        <div class="breed-details-section__weight-range">
          <slider
            v-model="formData.weight"
            :label="text.careCheckPage.weight"
            :valueLabel="text.unitsOfMeasurement.weight"
            max="60"
            step="0.5"
          />
        </div>

        <div class="breed-details-section__submit-wrap" v-if="pageWidth > 768">
          <primary-button
            type="submit"
            :text="text.careCheckPage.goToResults"
            :disabled="!isInputValid"
            :backgroundColor="isInputValid ? undefined : '#C6C6C6'"
          />
        </div>
      </section>

      <section class="care-check-form__care-details-section">
        <div class="care-details-section__input-wrap">
          <radio-group
            :header="text.careCheckPage.numberOfWalks"
            :options="[
              { value: 1, label: `1 ${text.careCheckPage.time}` },
              { value: 2, label: `2 - 3 ${text.careCheckPage.times}` },
              {
                value: 3,
                label: `${text.careCheckPage.moreThan} 3 ${text.careCheckPage.times}`,
              },
            ]"
            name="numberOfWalks"
            v-model="formData.numberOfWalks"
          />
        </div>

        <div class="care-details-section__input-wrap">
          <radio-group
            :header="text.careCheckPage.eatTimes"
            :options="[
              { value: 1, label: `1 ${text.careCheckPage.time}` },
              { value: 2, label: `2 ${text.careCheckPage.times}` },
              { value: 3, label: `3 ${text.careCheckPage.times}` },
              {
                value: 4,
                label: `${text.careCheckPage.moreThan} 3 ${text.careCheckPage.times}`,
              },
            ]"
            name="eatTimes"
            v-model="formData.eatTimes"
          />
        </div>

        <div class="care-details-section__input-wrap">
          <text-input
            :label="text.careCheckPage.portionWeight"
            :placeholder="text.careCheckPage.portionWeightPlaceholder"
            v-model="formData.portionWeight"
            type="text"
          />
        </div>

        <div class="care-details-section__submit-wrap" v-if="pageWidth <= 768">
          <primary-button
            type="submit"
            :text="text.careCheckPage.goToResults"
            :disabled="!isInputValid"
            :backgroundColor="isInputValid ? undefined : '#C6C6C6'"
          />
        </div>
      </section>
    </form>

    <div v-else-if="!!selectedBreedData" class="care-check-page__care-results">
      <section class="care-results__breed-info">
        <h1 class="breed-info__header">{{ selectedBreed }}</h1>

        <div class="breed-info__image-wrap">
          <img :src="selectedBreedData.images[1]" alt="pet" />
        </div>

        <div class="breed-info__breed-care">
          <collapsed-container :headerText="text.careCheckPage.breedCare">
            <p class="breed-care__text">
              {{ selectedBreedData.careNorms.breedCare }}
            </p>
          </collapsed-container>
        </div>

        <div class="breed-info__reset-wrap" v-if="pageWidth > 768">
          <primary-button
            :text="text.careCheckPage.goBack"
            :clickHandler="handleGoBack"
          />
        </div>
      </section>

      <section class="care-results__analysis">
        <h2 class="analysis__header">{{ text.careCheckPage.analysis }}</h2>

        <ul class="analysis__results-list">
          <li class="results-list__item">
            <care-option-result
              :header="`${text.careCheckPage.weight}, ${text.unitsOfMeasurement.weight}`"
              :normText="`Norm: ${selectedBreedData.careNorms.weight} ${text.unitsOfMeasurement.weight}`"
              option="weight"
              :normValue="selectedBreedData.careNorms.weight"
              :inputValue="formData.weight"
            />
          </li>

          <li class="results-list__item">
            <care-option-result
              :header="text.careCheckPage.numberOfWalksPerDay"
              :normText="`Norm: ${selectedBreedData.careNorms.numberOfWalks} ${text.careCheckPage.walking}s`"
              option="numberOfWalks"
              :normValue="selectedBreedData.careNorms.numberOfWalks"
              :inputValue="formData.numberOfWalks"
            />
          </li>

          <li class="results-list__item">
            <care-option-result
              :header="text.careCheckPage.eatTimesPerDay"
              :normText="`Norm: ${selectedBreedData.careNorms.eatTimes} ${text.careCheckPage.times}`"
              option="eatTimes"
              :normValue="selectedBreedData.careNorms.eatTimes"
              :inputValue="formData.eatTimes"
            />
          </li>

          <li class="results-list__item">
            <care-option-result
              :header="text.careCheckPage.portionWeightInGram"
              :normText="`Norm: ${selectedBreedData.careNorms.portionWeight} ${text.unitsOfMeasurement.liteWeight}`"
              option="portionWeight"
              :normValue="selectedBreedData.careNorms.portionWeight"
              :inputValue="formData.portionWeight"
            />
          </li>
        </ul>

        <div class="analysis__reset-wrap" v-if="pageWidth <= 768">
          <primary-button
            :text="text.careCheckPage.goBack"
            :clickHandler="handleGoBack"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { text } from '@/mock/engText'
import { validateInput } from './helpers/validateInput'
import DogAvatarIcon from '@/components/Icons/DogAvatar.vue'
import Select from '@/components/Input/Select.vue'
import TextInput from '@/components/Input/Text.vue'
import RadioGroup from '@/components/Input/RadioGroup.vue'
import PrimaryButton from '@/components/Buttons/Primary.vue'
import Slider from '@/components/Input/Slider.vue'
import CollapsedContainer from '@/components/CollapsedContainer.vue'
import CareOptionResult from './components/CareOptionResult.vue'

export default {
  name: 'CareCheckView',
  components: {
    DogAvatarIcon,
    Select,
    TextInput,
    RadioGroup,
    PrimaryButton,
    Slider,
    CareOptionResult,
    CollapsedContainer,
  },
  data() {
    return {
      text,
      formData: {
        breed: 'Pug',
        weight: 0,
        numberOfWalks: 1,
        eatTimes: 1,
        portionWeight: '',
      },
      pageWidth: window.innerWidth,
    }
  },
  computed: {
    petBreeds() {
      return this.$store.state.pets.map((pet) => pet.breed)
    },
    petCareNorms() {
      return this.$store.state.pets.map((pet) => pet.careNorms)
    },
    isInputValid() {
      return validateInput(this.formData)
    },
    selectedBreed() {
      return this.$store.state.breedForCheckCare
    },
    selectedBreedData() {
      return this.$store.state.pets.find(
        (pet) => pet.breed === this.selectedBreed
      )
    },
  },
  created() {
    this.dispatchPets()
    window.addEventListener('resize', this.handleScreenResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleScreenResize)
  },
  methods: {
    dispatchPets() {
      this.$store.dispatch('getPetsList', { all: true })
    },
    handleSubmit() {
      this.$store.dispatch('setBreedForCareCheck', this.formData.breed)
    },
    handleScreenResize() {
      this.pageWidth = window.innerWidth
    },
    handleGoBack() {
      this.$store.dispatch('setBreedForCareCheck', '')
    },
  },
}
</script>

<style scoped lang="scss">
.care-check-page {
  .care-check-page__care-check-form {
    display: flex;
    justify-content: space-between;

    .care-check-form__breed-details-section,
    .care-check-form__care-details-section {
      width: 45%;

      .breed-details-section__image-wrap {
        display: flex;
        justify-content: center;
        margin: 38px 0 62px;
      }

      .breed-details-section__weight-range {
        margin: 32px 0 54px;
      }

      .breed-details-section__submit-wrap {
        width: 100%;
        max-width: 164px;
      }

      .care-details-section__input-wrap {
        margin-bottom: 20px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }

  .care-check-page__care-results {
    display: flex;
    justify-content: space-between;

    .care-results__breed-info,
    .care-results__analysis {
      width: 45%;

      .breed-info__header {
        font-size: 28px;
        line-height: 33px;
        font-weight: 700;
      }

      .breed-info__image-wrap {
        width: 100%;
        height: 270px;
        margin: 30px 0 66px;
        border-radius: 4px;
        overflow: hidden;

        img {
          width: 100%;
          object-fit: cover;
          height: 100%;
        }
      }

      .breed-info__breed-care {
        .breed-care__text {
          font-size: 14px;
          line-height: 16px;
          text-align: justify;
          margin-top: 15px;
        }
      }

      .breed-info__reset-wrap {
        margin-top: 30px;
      }

      .analysis__header {
        font-size: 24px;
        line-height: 28px;
        font-weight: 500;
        margin-bottom: 30px;
      }

      .analysis__results-list {
        .results-list__item {
          margin-bottom: 30px;
        }
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .care-check-page {
    box-sizing: border-box;
    padding: 0 15px;
  }
}

@media only screen and (max-width: 768px) {
  .care-check-page {
    .care-check-page__care-check-form {
      flex-direction: column;
      align-items: center;

      .care-check-form__breed-details-section,
      .care-check-form__care-details-section {
        width: 100%;
        max-width: 600px;

        .breed-details-section__image-wrap {
          margin: 15px 0;
        }

        .breed-details-section__weight-range {
          margin: 20px 0;
        }

        .breed-details-section__submit-wrap {
          width: 100%;
          max-width: 164px;
        }

        .care-details-section__input-wrap {
          margin-bottom: 20px;

          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }

      .care-details-section__submit-wrap {
        margin-top: 30px;
      }
    }

    .care-check-page__care-results {
      flex-direction: column;
      align-items: center;

      .care-results__breed-info,
      .care-results__analysis {
        width: 100%;
        max-width: 600px;

        .breed-info__image-wrap {
          height: 270px;
          margin: 15px 0 33px;
        }

        .breed-info__reset-wrap {
          margin-top: 30px;
        }

        .analysis__header {
          margin: 30px 0;
        }
      }
    }
  }
}
</style>
