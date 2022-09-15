<template>
  <router-link :to="{ name: linkName }">
    <div class="link-wrap">
      <p class="link-text">{{ text }}</p>
      <RightArrowIcon />
    </div>
  </router-link>
</template>

<script>
import RightArrowIcon from '@/components/Icons/ArrowRight.vue'

export default {
  name: 'HomeLink',
  components: { RightArrowIcon },
  props: {
    linkName: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.link-wrap {
  display: flex;
  align-items: center;

  .link-text {
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    color: #0a84ff;
    margin-right: 10px;
  }
}
</style>
