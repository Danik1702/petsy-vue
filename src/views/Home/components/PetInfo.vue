<template>
  <div class="pet-info">
    <div class="pet-info__header jc-sb">
      <div class="avatar-container">
        <div class="avatar-wrap">
          <img src="@/assets/img/beagle.png" alt="beagle" />
        </div>
        <p class="text">{{ text.common.beagle }}</p>
      </div>

      <div class="categories-container">
        <p class="text">{{ text.common.data }}</p>
        <p class="categories-container__norm-text text">
          {{ text.common.norm }}
        </p>
      </div>
    </div>

    <div class="pet-info__values">
      <ul>
        <li v-for="pet in petInfo" :key="pet.id" class="jc-sb">
          <p class="text category">{{ pet.text }}</p>
          <div class="values-container">
            <div class="actual-value-container">
              <div :class="[pet.isGood ? 'good-result' : 'bad-result']">
                <span>{{ pet.actualValue }}</span>
              </div>
            </div>
            <p>{{ pet.normValue }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { text } from '@/mock/engText'

export default {
  name: 'PetInfoMock',
  data() {
    return {
      text,
      petInfo: [
        {
          id: 0,
          text: `${text.common.weight}, ${text.unitsOfMeasurement.weight}`,
          actualValue: 20,
          normValue: '25 - 30',
          isGood: false,
        },
        {
          id: 1,
          text: `${text.common.length}, ${text.unitsOfMeasurement.length}`,
          actualValue: 30,
          normValue: '27 - 33',
          isGood: true,
        },
        {
          id: 2,
          text: `${text.common.walksNumber}`,
          actualValue: 5,
          normValue: '3 - 5',
          isGood: true,
        },
        {
          id: 3,
          text: `${text.common.mealsNumber}`,
          actualValue: 5,
          normValue: '2 - 4',
          isGood: false,
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.pet-info {
  .pet-info__header {
    align-items: center;
    width: 100%;
    height: 46px;
    background-color: #ecffed;
    border-radius: 23px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 15px;

    .avatar-container {
      display: flex;
      align-items: center;

      .avatar-wrap {
        width: 32px;
        min-width: 32px;
        height: 32px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;

        img {
          width: 100%;
        }
      }
    }

    .categories-container {
      display: flex;

      .categories-container__norm-text {
        margin-left: 57px;
      }
    }
  }

  .pet-info__values {
    padding-left: 10px;

    ul {
      li {
        align-items: center;
        margin-bottom: 10px;

        .category {
          max-width: 190px;
        }

        .values-container {
          display: flex;
          align-items: center;

          .actual-value-container {
            width: 60px;
            text-align: center;

            div {
              padding: 4px 19px;
              border-radius: 50px;

              span {
                font-weight: 500;
              }
            }
          }

          p {
            width: 60px;
            text-align: center;
            margin-left: 40px;
            font-weight: 500;
          }
        }
      }
    }
  }
}

.text {
  font-size: 18px;
  line-height: 21px;
}
</style>
