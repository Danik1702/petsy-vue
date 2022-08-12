<template>
  <div id="layout">
    <Header />
    <div id="page-width">
      <router-view />
    </div>
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
    color: #000000;
    font-weight: 500;
  }
}

a {
  text-decoration: none;
  color: #000000;
}

li {
  list-style-type: none;
}

h1 {
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
}

#layout {
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  padding-bottom: 143px;

  #page-width {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
}

.selected {
  color: #ff9f0a;
}

.jc-sb {
  display: flex;
  justify-content: space-between;
}

.bad-result {
  background-color: #fff4f4;

  span {
    color: #d42323;
  }
}

.good-result {
  background-color: #ecffed;

  span {
    color: #19b61f;
  }
}
</style>
