<template>
  <div class="breeds-page">
    <div class="breeds-page__header-container">
      <h1 class="header-container__text">{{ text.breedsPage.find }}</h1>
      <SearchInput
        :placeholder="text.breedsPage.searchPlaceholder"
        v-model="searchValue"
      />
      <div
        v-if="appliedFiltersCount"
        class="header-container__buttons-container"
      >
        <div class="buttons-container__button-wrap">
          <rounded-button
            :text="`${text.breedsPage.changeFilters} (${appliedFiltersCount})`"
            :clickHandler="handleFiltersChange"
          />
        </div>

        <div class="buttons-container__button-wrap">
          <rounded-button
            :text="text.breedsPage.resetFilters"
            :clickHandler="handleFiltersReset"
            backgroundColor="#C6C6C6"
          />
        </div>
      </div>
    </div>

    <div class="breeds-page__empty-search-result" v-if="!filteredPets.length">
      <empty-search-placeholder />
    </div>
    <div class="breeds-page__pets-list" v-else>
      <ul ref="petsList">
        <li v-for="pet in filteredPets" :key="pet.id">
          <PetCard :petInfo="pet" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchInput from '../Breeds/components/SearchInput.vue'
import PetCard from '@/components/PetCard.vue'
import RoundedButton from '@/components/Buttons/Rounded.vue'
import EmptySearchPlaceholder from '@/components/EmptySearchPlaceholder.vue'
import { getFilterResult } from './helpers/getFilterResult'
import { text } from '@/mock/engText'
import { PETS_LIST_LIMIT, ROUTES } from '@/constants'

export default {
  name: 'BreedsView',
  components: { SearchInput, PetCard, RoundedButton, EmptySearchPlaceholder },
  data() {
    return {
      text,
      searchValue: '',
      startValue: 0,
      pets: [],
    }
  },
  computed: {
    storePets() {
      return this.$store.state.pets
    },
    appliedFiltersCount() {
      return Object.entries(this.$route.query).filter(
        (el) => el[0] === 'size' || JSON.parse(el[1])
      ).length
    },
    filteredPets() {
      if (this.$route.query.size) {
        return this.pets.filter((pet) =>
          getFilterResult(this.$route.query, pet)
        )
      }

      return this.pets
    },
  },
  watch: {
    searchValue() {
      this.resetValues()
      this.dispatchPets()
    },
    startValue() {
      this.dispatchPets()
    },
  },
  created() {
    this.dispatchPets()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scoll', this.handleScroll)
  },
  methods: {
    dispatchPets() {
      this.$store
        .dispatch('getPetsList', {
          limit: PETS_LIST_LIMIT,
          start: this.startValue,
          query: this.searchValue,
        })
        .then(() => {
          this.pets = [...this.pets, ...this.storePets]
        })
        .catch((error) => {
          console.log('getching pets error', error)
        })
    },
    resetValues() {
      this.startValue = 0
      this.pets = []
    },
    handleScroll() {
      const element = this.$refs.petsList
      if (
        element?.getBoundingClientRect().bottom < window.innerHeight &&
        this.storePets.length === 10
      ) {
        this.startValue += PETS_LIST_LIMIT
      }
    },
    handleFiltersChange() {
      this.$router.push({ name: ROUTES.filter, query: this.$route.query })
    },
    handleFiltersReset() {
      this.$router.push({ query: null })
    },
  },
}
</script>

<style scoped lang="scss">
.breeds-page {
  .breeds-page__header-container {
    padding-bottom: 25px;

    .header-container__text {
      margin-bottom: 20px;
    }

    .header-container__buttons-container {
      display: flex;
      margin-top: 25px;

      .buttons-container__button-wrap {
        &:last-of-type {
          margin-left: 30px;
        }
      }
    }
  }

  .breeds-page__pets-list {
    ul {
      display: flex;
      flex-wrap: wrap;

      li:nth-of-type(odd) {
        margin-right: 40px;
        margin-bottom: 30px;
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .breeds-page {
    padding: 0 15px;

    .breeds-page__pets-list {
      ul {
        li {
          width: 47.5%;
        }

        li:nth-of-type(odd) {
          margin-right: 5%;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .breeds-page {
    .breeds-page__pets-list {
      ul {
        justify-content: center;

        li {
          width: auto;
          margin-bottom: 30px;
        }

        li:nth-of-type(odd) {
          margin-right: 0;
        }
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  .breeds-page {
    .breeds-page__pets-list {
      ul {
        li {
          width: 100%;
        }
      }
    }
  }
}
</style>
