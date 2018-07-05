<template>
  <div class="basement">
    <div class="banner"></div>
    <div class="page-body">
      <div class="container">
        <el-row :gutter="1">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" v-for="box in boxLists" :key="box.id">
            <div class="content">
            <div class="img-info">
              <a target="_blank" :href="box.link">
               <!-- 1450 x 905比例 -->
                <img class="img-content" :src="box.imgUrl">
              </a>
            </div>
            <div class="text-info">
              <div class="text-title">
                <a target="_blank" :href="box.link">
               {{box.title}}
               </a>
              </div>
              <div class="text-content" :title="box.content">
                <p>
                  {{box.content}}
                </p>
              </div>
            </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodPick",
  data() {
    return {
      boxLists: []
    };
  },
  methods: {
    getGoodPickDatas() {
      this.$http({
        url: "./api/goodpick.json",
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
  .banner {
    width: 100%;
    height: 400px;
    background-image: url('../../../static/images/whitebanner.jpg');
    // background-attachment: fixed;
    background-position: bottom center;
  }

  .page-body {
    .container {
      // float: left;
      min-height: 100vh;
      // width: 100%;
      padding-top: 40px;
      background-color: #eee;
      margin-right: auto;
      margin-left: auto;

      .el-row {
        margin: 0px 90px;

        .content {
          position: relative;
          margin-bottom: 30px;
          padding: 0 40px 40px 40px;
          -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          // transition: all 0.2s ease 0s;
          border-radius: 4px;
          margin: 20px 50px;

          .img-info {
            // display: flex;
            // justify-content: center;
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

          .text-info {
            .text-title {
              // position: absolute;
              // left: 40%;
              // top: 75%;
              // text-align: center;
              // font-size: 190%;
              // padding: 10px 0;
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
              left: 10%;
              right: 10%;
              bottom: 7%;
              margin: 0;
              line-height: 25px;

              p {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
            }
          }
        }
      }
    }
  }
}
</style>
