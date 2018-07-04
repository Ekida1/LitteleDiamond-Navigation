<template>
  <div class="basement">
    <div class="banner"></div>
    <div class="page-body">
      <ul class="box-list">
        <li class="box-item"  v-for="box in boxLists" :key="box.id">
          <div class="img-info">
            <a target="_blank" :href="box.link">
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
        </li>
      </ul>
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
  width: 100%;

  .banner {
    width: 100%;
    height: 400px;
    background-image: url('../../../static/images/whitebanner.jpg');
    // background-attachment: fixed;
    background-position: bottom center;
  }

  .page-body {
    float: left;
    min-height: 100vh;
    width: 100%;
    padding-top: 40px;
    // padding-left: 180px;
    background-color: #eee;

    .box-list {
      width: 100%;

      .box-item {
        position: relative;
        float: left;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 474px;
        min-height: 490px;
        margin: 12px 20px;
        padding: 23px;
        overflow: hidden;
        border-radius: 1px;
        -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        transition: all 0.2s ease 0s;

        .img-info {
          .img-content {
            width: 474px;
            height: 377px;
          }
        }

        .text-info {
          .text-title {
            text-align: center;
            font-size: 25px;
            padding: 10px 0;
          }

          .text-content {
            line-height: 25px;

            p {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
          }
        }
      }

      .box-item:hover {
        -webkit-box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        bottom: 5px;
      }
    }
  }
}
</style>
