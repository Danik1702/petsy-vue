<template>
  <div class="footer">
    <div class="footer__copyright">
      <p class="footer__copyright__text">
        <span>&copy;</span>
        {{ text.footer.copyright }}
      </p>
    </div>

    <div class="footer__logo">
      <router-link :to="{ name: ROUTES.home }">
        <LogoIcon />
      </router-link>
    </div>

    <div>
      <nav>
        <ul class="footer__nav-list">
          <li v-for="navItem in navData" :key="navItem.id">
            <router-link :to="{ name: navItem.linkName }">
              <span>{{ navItem.text }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import LogoIcon from '@/assets/icons/Logo.vue'
import { ROUTES } from '@/constants'
import { text } from '@/mock/engText'

export default {
  components: { LogoIcon },
  data() {
    return {
      ROUTES,
      text,
      navData: [
        {
          id: 0,
          text: text.footer.home,
          linkName: ROUTES.home,
        },
        {
          id: 1,
          text: text.footer.breeds,
          linkName: ROUTES.breeds,
        },
        {
          id: 2,
          text: text.footer.filter,
          linkName: ROUTES.filter,
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: 93px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;

  .footer__copyright__text {
    font-size: 14px;
    line-height: 16px;
  }

  .footer__logo {
    position: absolute;
    left: 50%;
    margin-left: -31.5px;
  }

  .footer__nav-list {
    list-style-type: none;
    display: flex;

    li {
      padding: 3px 5px;
      margin-left: 20px;
      font-size: 15px;
      line-height: 18px;
      font-weight: 500;
    }
  }
}
</style>
