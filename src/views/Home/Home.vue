<template>
  <div class="home-page">
    <div class="home-page__logo">
      <div>
        <LogoIcon width="91" height="76" />
        <p>{{ text.common.brand }}</p>
      </div>
    </div>

    <div class="home-page__content jc-sb">
      <section class="left-section">
        <h2 class="left-section__header header-text">
          {{ text.homePage.leftHeader }}
        </h2>
        <div class="left-section__image-wrap">
          <img src="@/assets/img/home-page_first.png" alt="man-with-dog" />
        </div>
        <PetInfoMock />
        <div class="link-wrap">
          <HomeLink
            :linkName="ROUTES.careCheck"
            :text="text.homePage.findOut"
          />
        </div>
      </section>

      <section class="right-section">
        <h2 class="right-section__header header-text">
          {{ text.homePage.rightHeader }}
        </h2>
        <div class="right-section__image-wrap">
          <img src="@/assets/img/home-page_second.png" alt="people-with-pets" />
        </div>
        <HomePageQuestionsIcon />
        <div class="link-wrap">
          <HomeLink :linkName="ROUTES.filter" :text="text.homePage.pick" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import LogoIcon from '@/components/Icons/Logo.vue'
import HomePageQuestionsIcon from '@/components/Icons/HomePageQuestions.vue'
import PetInfoMock from './components/PetInfo.vue'
import HomeLink from './components/Link.vue'
import { text } from '@/mock/engText'
import { ROUTES } from '@/constants'

export default {
  name: 'HomeView',
  components: { LogoIcon, PetInfoMock, HomeLink, HomePageQuestionsIcon },
  data() {
    return {
      text,
      ROUTES,
    }
  },
}
</script>

<style scoped lang="scss">
.home-page {
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;

  .home-page__logo {
    display: flex;
    justify-content: center;
    margin-bottom: 53px;

    div {
      display: flex;
      align-items: center;

      p {
        margin-left: 16px;
        color: #5c4937;
        font-size: 30px;
        font-weight: 500;
        line-height: 35px;
        padding: 10px 20px;
      }
    }
  }

  .home-page__content {
    section {
      width: 45%;
    }

    .left-section {
      .left-section__image-wrap {
        width: 100%;
        max-width: 243px;
        height: 216px;
        margin: 0 auto;
        margin-bottom: 52px;

        img {
          width: 100%;
        }
      }
    }

    .right-section {
      .right-section__image-wrap {
        width: 100%;
        max-width: 357px;
        height: 255px;
        margin: 0 auto;
        margin-bottom: 29px;

        img {
          width: 100%;
        }
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .home-page {
    .home-page__content {
      display: block;

      section {
        width: 100%;
        max-width: 768px;
        margin: 0 auto;
        margin-bottom: 60px;
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  .home-page {
    .home-page__content {
      display: block;

      section {
        width: 100%;
        max-width: 768px;
        margin: 0 auto;
        margin-bottom: 60px;

        svg {
          max-width: 100%;
        }
      }
    }
  }
}

.header-text {
  font-size: 28px;
  line-height: 33px;
  font-weight: 700;
  color: #5c4937;
  margin-bottom: 20px;
}

.link-wrap {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
