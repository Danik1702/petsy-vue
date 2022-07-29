<template>
  <div class="breeds-page">
    <div class="breeds-page__header-container">
      <h1 class="header-container__text">{{ text.breedsPage.find }}</h1>
      <SearchInput
        :placeholder="text.breedsPage.searchPlaceholder"
        v-model="searchValue"
      />
      <div v-show="false" class="header-container__buttons-container"></div>
    </div>

    <div class="breeds-page__pets-list">
      <ul ref="petsList">
        <li v-for="pet in pets" :key="pet.id">
          <PetCard :petInfo="pet" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchInput from '../Breeds/components/SearchInput.vue'
import PetCard from '@/components/PetCard.vue'
import { text } from '@/mock/engText'
import { PETS_LIST_LIMIT } from '@/constants'

export default {
  name: 'BreedsView',
  components: { SearchInput, PetCard },
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
        element.getBoundingClientRect().bottom < window.innerHeight &&
        this.storePets.length === 10
      ) {
        this.startValue += PETS_LIST_LIMIT
      }
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
</style>
