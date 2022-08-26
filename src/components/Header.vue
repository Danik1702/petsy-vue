<template>
  <div class="header-height" />
  <div class="header">
    <nav class="header-nav">
      <div class="header-nav__logo">
        <router-link to="/">
          <LogoIcon />
        </router-link>
      </div>

      <!-- MODIFY IT -->
      <div
        class="header-nav__mobile-menu-wrap"
        v-if="pageWidth <= 1024"
        @click="handleMenuClick"
      >
        <div
          :class="[
            isMobileMenuOpened ? '' : 'hidden',
            'mobile-menu-wrap__cross',
            'menu-icon',
          ]"
        >
          <cross-icon />
        </div>
        <div
          :class="[
            isMobileMenuOpened ? 'hidden' : '',
            'mobile-menu-wrap__burger',
            'menu-icon',
          ]"
        >
          <burger-menu-icon />
        </div>
      </div>
      <ul class="header-nav__list" v-else>
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

    <div
      :class="[
        isMobileMenuOpened ? 'header__mobile-wrap__visible' : '',
        'header__mobile-wrap',
      ]"
    >
      <div
        :class="[
          isMobileMenuOpened ? '' : 'mobile-wrap__page-hide__hidden',
          'mobile-wrap__page-hide',
        ]"
        @click="() => isMobileMenuOpened && handleMenuClick(false)"
      />

      <div class="mobile-wrap__mobile-header-wrap">
        <section class="mobile-header-wrap__mobile-header">
          <nav class="mobile-header__header-nav">
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
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import LogoIcon from '@/assets/icons/Logo.vue'
import HomeIcon from '@/assets/icons/Home.vue'
import PawIcon from '@/assets/icons/Paw.vue'
import SearchIcon from '@/assets/icons/Search.vue'
import LikeAndDislikeIcon from '@/assets/icons/LikeAndDislike.vue'
import QuestionMarkIcon from '@/assets/icons/QuestionMark.vue'
import BurgerMenuIcon from '@/assets/icons/BurgerMenu.vue'
import CrossIcon from '@/assets/icons/Cross.vue'
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
    BurgerMenuIcon,
    CrossIcon,
  },
  data() {
    return {
      ROUTES,
      colors,
      text,
      pageWidth: window.innerWidth,
    }
  },
  computed: {
    routeName() {
      return this.$route.name
    },
    isMobileMenuOpened() {
      return this.$store.state.isMobileMenuOpened
    },
  },
  methods: {
    handleScreenResize() {
      this.pageWidth = window.innerWidth
    },
    handleMenuClick(value = undefined) {
      this.$store.dispatch('setMobileMenuVisibility', value)
    },
  },
  created() {
    window.addEventListener('resize', this.handleScreenResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleScreenResize)
  },
  watch: {
    $route() {
      this.isMobileMenuOpened && this.handleMenuClick(false)
    },
    isMobileMenuOpened() {
      if (this.isMobileMenuOpened) {
        document.body.style.overflow = 'hidden'
      } else {
        setTimeout(() => {
          document.body.style.overflow = 'auto'
        }, 1000)
      }
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

  .header-nav {
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

  .header__mobile-wrap {
    position: fixed;
    top: 64px;
    width: 100%;
    height: calc(100vh - 64px);
    z-index: 10;
    transform: translateX(300px);
    visibility: hidden;
    transition-duration: 1s;

    .mobile-wrap__page-hide {
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      left: -300px;
      right: 0;
      background-color: #000000;
      opacity: 0.4;
      transition-duration: 1s;
    }

    .mobile-wrap__page-hide__hidden {
      opacity: 0;
    }

    .mobile-wrap__mobile-header-wrap {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      height: 100%;
      z-index: 15;

      .mobile-header-wrap__mobile-header {
        width: 100%;
        max-width: 300px;
        padding: 0 15px;
        box-sizing: border-box;
        background-color: #ffffff;

        .mobile-header__header-nav {
          padding: 0;

          .header-nav__list {
            display: flex;
            flex-direction: column;

            li {
              border-top: 1px solid rgba(185, 174, 174, 0.8);

              &:last-of-type {
                border-bottom: 1px solid rgba(185, 174, 174, 0.8);
              }

              .header-nav__list__item {
                display: flex;
                align-items: center;
                padding: 20px 0;

                .header-nav__list__item__text {
                  margin-left: 10px;
                }
              }
            }
          }
        }
      }
    }
  }

  .header__mobile-wrap__visible {
    transform: translateX(0);
    visibility: initial;
  }
}

@media only screen and (max-width: 1024px) {
  .header-height {
    height: 64px;
  }

  .header {
    width: 100%;

    .header-nav {
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .header-nav__logo {
        margin-right: 0px;
      }

      .header-nav__mobile-menu-wrap {
        cursor: pointer;
        width: 24px;
        height: 24px;
        position: relative;

        .menu-icon {
          width: 100%;
          height: 100%;
          opacity: 1;
          transition-duration: 1s;
          position: absolute;
        }

        .hidden {
          opacity: 0;
          visibility: hidden;
          transform: rotate(360deg);
          transition-duration: 1s;
        }
      }
    }
  }
}
</style>
