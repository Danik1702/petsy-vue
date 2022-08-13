<template>
  <section class="pet-avatar">
    <div class="pet-avatar__image-wrap">
      <img :src="imageSrc" alt="pet-avatar" />
    </div>
    <p class="pet-avatar__breed">{{ breedName }}</p>
  </section>
</template>

<script>
export default {
  name: 'PetAvatar',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    breedName: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.pet-avatar {
  display: flex;
  align-items: center;

  .pet-avatar__image-wrap {
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    width: 30px;
    height: 30px;

    img {
      width: 30px;
      height: 30px;
      object-fit: cover;
    }
  }

  .pet-avatar__breed {
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
