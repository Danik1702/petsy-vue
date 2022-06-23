<template>
  <div id="layout">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Header, Footer },
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #000000;
  background-color: #ffffff;
}

nav {
  padding: 30px;

  a {
    text-decoration: none;
    color: #000000;
    font-weight: 500;
  }
}

#layout {
  min-height: 100vh;
  position: relative;
}

.selected {
  color: #ff9f0a;
}
</style>
