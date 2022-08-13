<template>
  <div class="comparison-page">
    <div v-if="!!petsToComparison.length">
      <h1 class="comparison-page__header">
        {{ text.comparisonPage.comparison }}
      </h1>

      <div class="comparison-page__selected-pets">
        <selected-pets :petsToCompare="petsToComparison" />
      </div>

      <div class="comparison-page__comparison">
        <section class="comparison-section comparison__characteristics">
          <h2 class="comparison-header">
            {{ text.comparisonPage.characteristics }}
          </h2>

          <div class="characteristics__list">
            <ul>
              <li
                v-for="(characteristicKey, index) in Object.keys(
                  petsToComparison[0].characteristics
                )"
                :key="index"
                class="list__item"
              >
                <pet-option-to-compare
                  :header="text.comparisonPage[characteristicKey]"
                >
                  <div
                    v-for="pet in petsToComparison"
                    :key="pet.id"
                    class="separate-pet-characteristic-item"
                  >
                    <pet-characteristic
                      :value="pet.characteristics[characteristicKey]"
                    >
                      <pet-avatar
                        :imageSrc="pet.images[0]"
                        :breedName="pet.breed"
                      />
                    </pet-characteristic>
                  </div>
                </pet-option-to-compare>
              </li>
            </ul>
          </div>
        </section>

        <section class="comparison-section comparison__specialty">
          <h2 class="comparison-header">
            {{ text.comparisonPage.specialty }}
          </h2>

          <div class="specialty__list">
            <ul>
              <li
                v-for="(specialtyKey, index) in Object.keys(
                  petsToComparison[0].observation
                )"
                :key="index"
                class="list__item"
              >
                <pet-option-to-compare
                  :header="text.comparisonPage[specialtyKey]"
                >
                  <div
                    v-for="pet in petsToComparison"
                    :key="pet.id"
                    class="separate-pet-characteristic-item"
                  >
                    <pet-specialty
                      :value="
                        getCorrectObservationData(pet.observation)[specialtyKey]
                      "
                    >
                      <pet-avatar
                        :imageSrc="pet.images[0]"
                        :breedName="pet.breed"
                      />
                    </pet-specialty>
                  </div>
                </pet-option-to-compare>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>

    <div v-else>
      <empty-search-placeholder
        :text="text.comparisonPage.emptyPageText"
        :imgPath="require('@/assets/img/no-pets-to-compare.jpeg')"
      />
    </div>
  </div>
</template>

<script>
import PetCharacteristic from '@/components/PetCharacteristic.vue'
import EmptySearchPlaceholder from '@/components/EmptySearchPlaceholder.vue'
import SelectedPets from './components/SelectedPets.vue'
import PetOptionToCompare from './components/PetOptionToCompare.vue'
import PetAvatar from './components/PetAvatar.vue'
import PetSpecialty from './components/PetSpecialty.vue'
import { text } from '@/mock/engText'
import { getCorrectObservationData } from '@/helpers/getCorrectObservationData'

export default {
  name: 'ComparisonView',
  components: {
    EmptySearchPlaceholder,
    SelectedPets,
    PetOptionToCompare,
    PetAvatar,
    PetCharacteristic,
    PetSpecialty,
  },
  data() {
    return {
      text,
      getCorrectObservationData,
    }
  },
  computed: {
    petsToComparison() {
      return this.$store.state.petsToComparison
    },
    petSpecialty() {
      return getCorrectObservationData(this.petInfo.observation)
    },
  },
}
</script>

<style scoped lang="scss">
.comparison-page {
  .comparison-page__selected-pets {
    margin: 30px 0 25px 0;
  }

  .comparison-page__comparison {
    display: flex;
    justify-content: space-between;

    .comparison-section {
      width: 42%;

      .comparison-header {
        font-size: 24px;
        line-height: 28px;
        font-weight: 500;
        margin-bottom: 30px;
      }

      .separate-pet-characteristic-item {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
