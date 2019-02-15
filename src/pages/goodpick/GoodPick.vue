<template>
  <div class="basement">
    <div class="banner">
      <div class="banner-title">
        优站精选
        <div class="english-tip">
          Optimal station selection.
        </div>
      </div>
    </div>
    <div class="page-body">
      <div class="container">
        <el-row :gutter="90" class="animation-fade-up">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-for="box in boxLists" :key="box.id">
            <div class="content">
              <div class="img-info">
                <a target="_blank" :href="box.link">
                  <!-- 1450 x 905比例 -->
                  <img class="img-content" :src="box.imgUrl">
                </a>
              </div>
              <div class="text-title">
                <a target="_blank" :href="box.link">
                 {{box.title}}
                 </a>
              </div>
              <div class="text-content" :title="box.content">
                {{box.content}}
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageFooter from "@/pages/Footer";
export default {
  name: "goodPick",
  components: {
    pageFooter
  },
  data() {
    return {
      boxLists: []
    };
  },
  methods: {
    getGoodPickDatas() {
      this.$http({
        url: "./static/mock/goodpick.json",
        methods: "GET"
      }).then(
        res => {
          res = res.body;
          if (res.success && res.data) {
            const data = res.data;
            this.boxLists = data.boxLists;
          }
        },
        () => {
          console.log("goodpick-error");
        }
      );
    }
  },
  mounted() {
    this.getGoodPickDatas();
  }
};
</script>

<style lang="stylus" scoped>
.basement {
  // width: 100%;
  position: absolute;
  top: 61px;
  left: 0;
  right: 0;

  .banner {
    position: relative;
    width: 100%;
    height: 450px;
    // background-image: url('../../../static/images/whitebanner.jpg');
    background-image: url('../../../static/images/goodpick_header.jpg');
    // background-attachment: fixed;
    background-position: center;

    .banner-title {
      width: 208px;
      height: 50px;
      position: absolute;
      top: 40%;
      left: 0%;
      right: 0%;
      margin: 0 auto;
      font-size: 50px;
      color: #ffffff;
      font-weight: bold;
      letter-spacing: 2px;

      .english-tip {
        font-size: 15px;
        text-align: center;
        margin-top: 5px;
        letter-spacing: 0px;
      }
    }
  }

  .page-body {
    background-color: #eee;

    .container {
      // float: left;
      min-height: 100vh;
      // width: 100%;
      padding-top: 40px;
      // background-color: #eee;
      margin-right: 30px;
      margin-left: 30px;

      .el-row {
        margin: 0px 90px;

        .content {
          position: relative;
          margin-bottom: 30px;
          padding: 0 40px 40px 40px;
          -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          transition: all 0.2s ease 0s;
          border-radius: 4px;
          margin: 20px auto;

          .img-info {
            position: relative;
            overflow: hidden;
            padding-top: 80%;

            .img-content {
              margin-bottom: 0;
              padding: 12px;
              border-top-right-radius: 0;
              border-top-left-radius: 0;
              border-bottom-right-radius: 0;
              border-bottom-left-radius: 0;
              border: none;
              position: absolute;
              max-width: 100%;
              min-width: 10%;
              top: 0;
              left: 0;
            }
          }

          .text-title {
            position: absolute;
            font-size: 24px;
            bottom: 18%;
            left: 0;
            right: 0;
            text-align: center;
            margin: 0;
          }

          .text-content {
            position: absolute;
            font-size: 15px;
            left: 10%;
            right: 10%;
            bottom: 7%;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: 25px;
          }
        }

        .content:hover {
          -webkit-box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
          bottom: 5px;
        }
      }

      .animation-fade-up {
        animation: fadeInUp 1200ms;
        -webkit-animation: fadeInUp 1200ms;
        -moz-animation: fadeInUp 1200ms;
        -ms-animation: fadeInUp 1200ms;
      }
    }
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

@media screen and (max-width: 539px) {
  .text-content {
    display: none !important;
  }
}
</style>
