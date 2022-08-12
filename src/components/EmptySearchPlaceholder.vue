<template>
  <section class="empty-search">
    <img :src="imgPath" class="empty-search__image" alt="empty-search" />
    <h3 class="empty-search__text">{{ text }}</h3>
  </section>
</template>

<script>
export default {
  name: 'EmptySearchPlaceholder',
  props: {
    text: {
      type: String,
      default: 'There is no results..',
    },
    imgPath: {
      type: String,
      default: require('@/assets/img/empty-search.jpeg'),
    },
  },
}
</script>

<style scodep lang="scss">
.empty-search {
  display: flex;
  flex-direction: column;
  align-items: center;

  .empty-search__image {
    max-width: 100%;
    width: 250px;
    height: 250px;
  }

  .empty-search__text {
    font-size: 26px;
    line-height: 30px;
    font-weight: normal;
    color: #8e8e93;
  }
}
</style>
