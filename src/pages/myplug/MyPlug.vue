<template>
  <div class="basement">
    <div class="wrapper">
      <div class="big-title">
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
      <div class="swiper-box">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="slide in swiperLists" :key="slide.id">
            <img class="spwier-img" :src="slide.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="plug-box-wrap">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
            <div class="grid-content bg-hardgreen"></div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
            <div class="grid-content bg-normalgreen"></div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
            <div class="grid-content bg-deepgreen"></div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="5" :lg="5" :xl="5">
            <div class="grid-content bg-lightgreen"></div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="5" :lg="5" :xl="5">
            <div class="grid-content bg-deepgreen"></div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="5" :lg="5" :xl="5">
            <div class="grid-content bg-lightgreen"></div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
            <div class="grid-content bg-hardgreen"></div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="5" :lg="5" :xl="5">
            <div class="grid-content bg-normalgreen"></div>
          </el-col>
        </el-row>
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
      swiperLists: []
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
    getSwiperListsData() {
      this.$http({
        url: "./api/myPlug.json",
        methods: "GET"
      }).then(
        res => {
          res = res.body;
          if (res.success && res.data) {
            const data = res.data;
            this.swiperLists = data.swiperLists;
          }
        },
        () => {
          console.log("myPlug-error");
        }
      );
    }
  },
  mounted() {
    this.getSwiperListsData();
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

      .bg-normalgreen {
        background: #208C60;
      }

      .bg-deepgreen {
        background: #218868;
      }

      .bg-lightgreen {
        background: #A0F4E2;
      }

      .grid-content {
        border-radius: 4px;
        height: 152px;
      }

      .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
      }
    }
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
</style>
