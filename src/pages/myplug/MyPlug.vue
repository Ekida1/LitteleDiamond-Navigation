<template>
  <div class="basement">
    <div class="wrapper">
      <div class="big-title animation-fade-down">
        <p>一些我认为<strong>好用</strong>的插件推荐</p>
      </div>
      <!-- <div class="swiper-box">
          <swiper :options="swiperOption">
            <swiper-slide v-for="slide in swiperLists" :key="slide.id">
              <img class="spwier-img" :src="slide.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <div class="swiper-button-prev swiper-button-white"></div>
          <div class="swiper-button-next swiper-button-white"></div>
        </div> -->
      <div class="swiper-box animation-fade-down">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="slide in swiperLists" :key="slide.id">
            <img class="spwier-img" :src="slide.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="plug-box-wrap animation-fade-up">
        <el-row :gutter="20" v-for="(pluglist,index) in plugLists" :key="index">
          <el-col v-for="plug in pluglist" :key="plug.id" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="grid-content" :class="{'bg-hardgreen': plug.color === 'bg-hardgreen', 'bg-lightgreen': plug.color === 'bg-lightgreen'}">
            <!-- class="grid-content" -->
            <a :class="{'white-font': plug.color === 'bg-hardgreen', 'dark-font': plug.color === 'bg-lightgreen'}" target="_blank" :href="plug.link">
            <p class="content-title">{{plug.title}}</p>
            <p class="content-info" :title="plug.content">{{plug.content}}</p>
            </a>
            </div>
          </el-col>
          <!-- <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
            <div class="grid-content bg-normalgreen">
              {{plug[1]}}
            </div>
          </el-col> -->
        </el-row>
        <!-- <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
            <div class="grid-content bg-deepgreen"></div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
            <div class="grid-content bg-lightgreen"></div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
            <div class="grid-content bg-lightgreen"></div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
            <div class="grid-content bg-hardgreen"></div>
          </el-col>
        </el-row> -->
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "myPlug",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperLists: [],
      plugLists: []
      // swiperOption: {
      //   speed: 800,
      //   autoplay: true,
      //   loop: true,
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev"
      //   },
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true
      //   },
      //   observer: true, //修改swiper自己或子元素时，自动初始化swiper
      //   observeParents: true //修改swiper的父元素时，自动初始化swiper
      // }
    };
  },
  methods: {
    groupBy(arr, len) {
      let arr_len = arr.length;
      let result = [];
      for (let i = 0; i < arr_len; i += len) {
        result.push(arr.slice(i, i + len));
      }
      return result;
    },
    getSwiperListsData() {
      return new Promise((resolve, reject) => {
        this.$http({
          url: "./static/mock/myPlug.json",
          methods: "GET"
        }).then(
          res => {
            res = res.body;
            if (res.success && res.data) {
              const data = res.data;
              this.swiperLists = data.swiperLists;
              this.plugLists = data.plugLists;
              resolve();
            }
          },
          err => {
            reject(err);
          }
        );
      });
    }
  },
  mounted() {
    this.getSwiperListsData().then(
      () => {
        this.plugLists = this.groupBy(this.plugLists, 2);
        console.log(this.plugLists);
      },
      err => {
        console.log("my-plug request data error", err);
      }
    );
  }
};
</script>

<style lang="stylus" scoped>
.swiper-box >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.basement {
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 61px;
  left: 0;
  right: 0;
  background-image: url('../../../static/images/lightgreen.jpeg');

  .wrapper {
    .big-title {
      width: 480px;
      height: 40px;
      position: absolute;
      top: 50px;
      left: 0%;
      right: 0%;
      margin: 0 auto;

      p {
        color: #4D4D4D;
        font-size: 40px;

        strong {
          font-weight: bold;
        }
      }
    }

    .swiper-box {
      overflow: hidden;
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 840px;
      height: 300px;
      // padding-bottom: 300px;
      background: #eee;

      .spwier-img {
        width: 840px;
        height: 300px;
      }
    }

    .plug-box-wrap {
      min-height: 100vh;
      overflow: hidden;
      // position: absolute;
      // top: 450px;
      // left: 0;
      // right: 0;
      margin-top: 450px;
      margin-left: auto;
      margin-right: auto;
      width: 70%;
      padding-left: 25px;
      padding-right: 25px;

      .el-row {
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      .el-col {
        border-radius: 4px;
      }

      .bg-hardgreen {
        background: #1F7252;
      }

      .bg-lightgreen {
        background: #A0F4E2;
      }

      .grid-content {
        border-radius: 4px;
        padding: 10px 20px;
        height: 152px;

        .white-font {
          color: #FFF;
        }

        .dark-font {
          color: #333;
        }

        a:hover {
          text-decoration: underline;
        }

        .content-title {
          font-size: 20px;
          margin: 15px 0;
          font-weight: bolder;
        }

        .content-info {
          line-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
      }

      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    }

    .animation-fade-down {
      animation: fadeInDown 1000ms;
      -webkit-animation: fadeInDown 1000ms;
      -moz-animation: fadeInDown 1000ms;
      -ms-animation: fadeInDown 1000ms;
    }

    .animation-fade-up {
      animation: fadeInUp 1000ms;
      -webkit-animation: fadeInUp 1000ms;
      -moz-animation: fadeInUp 1000ms;
      -ms-animation: fadeInUp 1000ms;
    }
  }
}

/* 淡入-从上down */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 淡入-从下up */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 826px) {
  .basement {
    top: 121px !important;
  }
}

@media screen and (max-width: 456px) {
  .basement {
    top: 181px !important;
  }
}

@media screen and (max-width: 332px) {
  .basement {
    top: 241px !important;
  }
}

@media screen and (max-width: 991px) {
  .el-col {
    margin-top: 20px !important;
  }
}
</style>
