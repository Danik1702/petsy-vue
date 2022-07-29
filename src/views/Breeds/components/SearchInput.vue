<template>
  <div class="search">
    <div class="search__icon-wrap">
      <SearchIcon color="#A8A8A8" />
    </div>
    <input
      class="search__input"
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
import SearchIcon from '@/assets/icons/Search.vue'

export default {
  name: 'SearchInput',
  components: { SearchIcon },
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.search {
  position: relative;
  width: 100%;

  .search__icon-wrap {
    position: absolute;
    left: 10px;
    top: 50%;
    margin-top: -12px;
  }

  .search__input {
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 0 15px 0 44px;
    background-color: #f4f4f4;
    border-radius: 5px;
    border: none;
    outline: none;
    font-weight: 500;
    letter-spacing: 0.05em;
    transition-duration: 0.3s;
    font-size: 16px;

    &:focus {
      box-shadow: 0 0 10px 2px #ff9f0a;
    }
  }
}
</style>
