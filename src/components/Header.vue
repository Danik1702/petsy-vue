<template>
  <div class="header-height" />
  <div class="header">
    <nav class="heaer-nav">
      <div class="header-nav__logo">
        <router-link to="/">
          <LogoIcon />
        </router-link>
      </div>

      <!-- MODIFY IT -->
      <ul class="header-nav__list">
        <li>
          <router-link :to="{ name: ROUTES.home }">
            <div class="header-nav__list__item">
              <div class="header-nav__list__item__icon-wrapp">
                <home-icon
                  :color="
                    routeName === ROUTES.home
                      ? colors.mainOrange.orangePeel
                      : colors.mainBlack.black
                  "
                />
              </div>
              <p
                class="header-nav__list__item__text"
                :class="{ selected: routeName === ROUTES.home }"
              >
                {{ text.header.home }}
              </p>
            </div>
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: ROUTES.breeds }">
            <div class="header-nav__list__item">
              <div class="header-nav__list__item__icon-wrapp">
                <paw-icon
                  :color="
                    routeName === ROUTES.breeds
                      ? colors.mainOrange.orangePeel
                      : colors.mainBlack.black
                  "
                />
              </div>
              <p
                class="header-nav__list__item__text"
                :class="{ selected: routeName === ROUTES.breeds }"
              >
                {{ text.header.breeds }}
              </p>
            </div>
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: ROUTES.filter }">
            <div class="header-nav__list__item">
              <div class="header-nav__list__item__icon-wrapp">
                <search-icon
                  :color="
                    routeName === ROUTES.filter
                      ? colors.mainOrange.orangePeel
                      : colors.mainBlack.black
                  "
                />
              </div>
              <p
                class="header-nav__list__item__text"
                :class="{ selected: routeName === ROUTES.filter }"
              >
                {{ text.header.filter }}
              </p>
            </div>
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: ROUTES.comparison }">
            <div class="header-nav__list__item">
              <div class="header-nav__list__item__icon-wrapp">
                <like-and-dislike-icon
                  :color="
                    routeName === ROUTES.comparison
                      ? colors.mainOrange.orangePeel
                      : colors.mainBlack.black
                  "
                />
              </div>
              <p
                class="header-nav__list__item__text"
                :class="{ selected: routeName === ROUTES.comparison }"
              >
                {{ text.header.comparison }}
              </p>
            </div>
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: ROUTES.careCheck }">
            <div class="header-nav__list__item">
              <div class="header-nav__list__item__icon-wrapp">
                <question-mark-icon
                  :color="
                    routeName === ROUTES.careCheck
                      ? colors.mainOrange.orangePeel
                      : colors.mainBlack.black
                  "
                />
              </div>
              <p
                class="header-nav__list__item__text"
                :class="{ selected: routeName === ROUTES.careCheck }"
              >
                {{ text.header.careCheck }}
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import LogoIcon from '@/assets/icons/Logo.vue'
import HomeIcon from '@/assets/icons/Home.vue'
import PawIcon from '@/assets/icons/Paw.vue'
import SearchIcon from '@/assets/icons/Search.vue'
import LikeAndDislikeIcon from '@/assets/icons/LikeAndDislike.vue'
import QuestionMarkIcon from '@/assets/icons/QuestionMark.vue'
import { ROUTES } from '@/constants'
import { colors } from '@/assets/styles'
import { text } from '@/mock/engText'

export default {
  components: {
    LogoIcon,
    HomeIcon,
    PawIcon,
    SearchIcon,
    LikeAndDislikeIcon,
    QuestionMarkIcon,
  },
  data() {
    return {
      ROUTES,
      colors,
      text,
    }
  },
  computed: {
    routeName() {
      return this.$route.name
    },
  },
}
</script>

<style lang="scss" scoped>
.header-height {
  height: 84px;
  margin-bottom: 30px;
}

.header {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #ffffff;
  z-index: 5;

  .heaer-nav {
    height: 84px;
    box-sizing: border-box;
    padding: 0 30px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;

    .header-nav__logo {
      margin-right: 80px;
      width: 63px;
      height: 52px;
      cursor: pointer;
    }

    .header-nav__list {
      display: flex;

      li {
        list-style-type: none;
        margin-right: 50px;

        .header-nav__list__item {
          display: flex;
          align-items: center;

          .header-nav__list__item__text {
            font-size: 15px;
            line-height: 18px;
            margin-left: 8px;
          }
        }
      }
    }
  }
}
</style>
