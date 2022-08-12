<template>
  <div class="comparison-page">
    <div v-if="!!petsToComparison.length">
      <h1 class="comparison-page__header">
        {{ text.comparisonPage.comparison }}
      </h1>

      <div class="comparison-page__selected-pets">
        <selected-pets :petsToCompare="petsToComparison" />
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
import EmptySearchPlaceholder from '@/components/EmptySearchPlaceholder.vue'
import SelectedPets from './components/SelectedPets.vue'
import { text } from '@/mock/engText'

export default {
  name: 'ComparisonView',
  components: { EmptySearchPlaceholder, SelectedPets },
  data() {
    return {
      text,
    }
  },
  computed: {
    petsToComparison() {
      return this.$store.state.petsToComparison
    },
  },
}
</script>

<style scoped lang="scss">
.comparison-page {
  .comparison-page__selected-pets {
    margin: 30px 0 25px 0;
  }
}
</style>
