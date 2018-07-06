<template>
  <div class="basement">
    <div class="main-container">
      <ul class="box-list">
        <li class="box-item" v-for="tool in toolLists" :key="tool.id">
          <div class="img-info">
            <a target="_blank" :href="tool.link">
              <img class="img-content" :src="tool.imgUrl">
            </a>
          </div>
          <div class="text-info">
            <div class="text-title">
              <a target="_blank" :href="tool.link">
             {{tool.title}}
             </a>
            </div>
            <div class="text-content" :title="tool.content">
              <p>
                {{tool.content}}
              </p>
            </div>
            <div class="controls">
              <div class="reference">
                分享人:&nbsp;{{tool.person}}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageFooter from "@/pages/Footer";
export default {
  name: "mainContainer",
  components: {
    pageFooter
  },
  props: {
    toolLists: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.basement {
  .main-container {
    min-height: 100vh;
    width: 100%;
    background: #eee;
    padding-top: 40px;
    padding-left: 10px;

    .box-list {
      animation: fadeInUp 1000ms;
      -webkit-animation: fadeInUp 1000ms;
      -moz-animation: fadeInUp 1000ms;
      -ms-animation: fadeInUp 1000ms;

      .box-item {
        position: relative;
        float: left;
        border-radius: 1px;
        width: 274px;
        height: 306px;
        overflow: hidden;
        background-color: #FFF;
        border: 1px solid #eee;
        -moz-border-top-colors: none;
        -moz-border-right-colors: none;
        -moz-border-bottom-colors: none;
        -moz-border-left-colors: none;
        border-image: none;
        transition: all 0.3s ease 0s;
        margin: 0 9px 18px 9px;
        padding: 8px;

        .img-info {
          .img-content {
            width: 274px;
            height: 195px;
          }
        }

        .text-info {
          width: 274px;
          background-color: #fff;
          transition: all ease-in-out 0.3s;
          position: absolute;
          top: 205px;
          left: 8px;
          overflow: hidden;

          .text-title {
            margin: 18px 0 0;
            margin-bottom: 12px;
            height: 18px;
            line-height: 18px;
            text-align: left;
            font-size: 14px;
            font-weight: bold;
            ellipsis();
            padding: 0 5px;
            padding-bottom: 4px;
          }

          .text-content {
            height: 40px;
            line-height: 40px;
            margin: 5px 0;
            padding: 0 5px;
            overflow: hidden;

            p {
              line-height: 20px;
              font-size: 12px;
              color: #989898;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }

          .controls {
            margin-top: 40px;
            transition: all ease-in-out 0.3s;

            .reference {
              float: left;
            }
          }
        }
      }

      .box-item:hover {
        border-color: $ProBlue;
      }

      .box-item:hover > .text-info {
        top: 165px;
        opacity: 0.9;
      }
    }
  }
}

/* 淡入-从下 */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(100px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -moz-transform: translateY(100px);
  }

  100% {
    opacity: 1;
    -moz-transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -ms-transform: translateY(100px);
  }

  100% {
    opacity: 1;
    -ms-transform: translateY(0);
  }
}

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
</style>
