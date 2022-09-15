<template>
  <section class="carousel" ref="carousel">
    <ul
      class="carousel__list"
      :style="{
        width: `calc(100% * ${listWidth})`,
        transform: `translate(${translateValue}px, 0)`,
      }"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="list__item"
        :style="{
          width: `${listItemWidth}px`,
        }"
      >
        <img :src="item" />
      </li>
    </ul>

    <div
      class="carousel__chevron-left carousel-chevron"
      v-if="selectedItem > 0"
      @click="handleChevronClick('left')"
    >
      <ChevronUpIcon />
    </div>
    <div
      class="carousel__chevron-right carousel-chevron"
      v-if="selectedItem < items.length - 1"
      @click="handleChevronClick('right')"
    >
      <ChevronUpIcon />
    </div>
  </section>
</template>

<script>
import ChevronUpIcon from '@/components/Icons/ChevronUp.vue'

export default {
  name: 'Carousel',
  components: { ChevronUpIcon },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedItem: 0,
      listItemWidth: 0,
      translateValue: 0,
    }
  },
  computed: {
    listWidth() {
      return this.items.length
    },
  },
  methods: {
    handleChevronClick(chevron) {
      if (chevron === 'left') {
        this.selectedItem -= 1
        this.translateValue += this.$refs.carousel.offsetWidth
      } else {
        this.selectedItem += 1
        this.translateValue -= this.$refs.carousel.offsetWidth
      }
    },
    handleScreenResize() {
      this.listItemWidth = this.$refs.carousel.offsetWidth
      this.translateValue = -(
        this.selectedItem * this.$refs.carousel.offsetWidth
      )
    },
  },
  mounted() {
    this.listItemWidth = this.$refs.carousel.offsetWidth
  },
  created() {
    window.addEventListener('resize', this.handleScreenResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleScreenResize)
  },
}
</script>

<style scoped lang="scss">
.carousel {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .carousel__list {
    display: flex;
    height: 100%;
    transition-duration: 1s;

    .list__item {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .carousel-chevron {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 50%;
    margin-top: -15px;
  }

  .carousel__chevron-left {
    transform: rotate(270deg);
    left: 10px;
  }

  .carousel__chevron-right {
    transform: rotate(90deg);
    right: 10px;
  }
}
</style>
