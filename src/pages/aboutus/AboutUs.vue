<template>
  <div class="basement">
    <div class="banner">
      <div class="banner-title">
        关于我们
      </div>
    </div>
    <ul class="main-body">
      <li class="column">
        <div class="column-header">
          <h2>我的故事</h2>
        </div>
        <div class="column-body">
          <div class="column-img-mystory"></div>
          <div class="column-content">
            <p>小钻石前端导航是本人用Vue脚手架搭建的一个本人前端学习经历工具库的收藏夹和使用框架和一些技术大牛博客的总结和收藏，其目的是为了分享更多更优秀的工具和博客，也为自己前端起步打下夯实基础，希望和大家共同努力！</p>
            <p>而现在，已拥有独立域名、空间，功能不断增加，势要做最专业的前端导航网站，所以我们忍不住要把它介绍给你。</p>
          </div>
        </div>
      </li>
      <li class="column">
        <div class="column-header">
          <h2>意见反馈</h2>
        </div>
        <div class="column-body">
          <div class="column-content">
            <p>毕竟该项目目前一个人维护，难免会有一些问题。 若发现新鲜站点/问题，您可第一时间留言推荐给我，将会出现在网址推荐列表。 欢迎大家为前端导航提供建议，您的每一份关心，都将是我最大的动力。

            </p>
          </div>
          <div class="column-img-feedback"></div>
        </div>
      </li>
    </ul>
    <div class="connect-container">
      <div class="connect-item">
        <div class="img-item img-qq"></div>
        <p>联系QQ</p>
        <p>583602732</p>
      </div>
      <div class="connect-item">
        <div class="img-item img-email"></div>
        <p>联系邮箱</p>
        <p>cymdidi@sina.com</p>
      </div>
      <div class="connect-item">
        <div class="img-item img-feedback"></div>
        <p>意见反馈</p>
        <p>cymdidi@sina.com</p>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageFooter from "@/pages/Footer";
export default {
  name: "aboutus",
  components: {
    pageFooter
  }
};
</script>

<style lang="stylus" scoped>
.basement {
  position: absolute;
  top: 61px;
  left: 0;
  right: 0;

  .banner {
    position: relative;
    width: 100%;
    height: 450px;
    background-image: url('../../../static/images/aboutus.jpg');
    background-position: top;
    background-size: cover;

    // background-attachment: fixed;
    .banner-title {
      width: 358px;
      height: 100px;
      line-height: 100px;
      position: absolute;
      top: 37%;
      left: 0%;
      right: 45%;
      margin: 0 auto;
      font-size: 50px;
      color: #ffffff;
      font-weight: bold;
      letter-spacing: 2px;
      border-top: 1px solid rgba(255, 255, 255, 0.8);
      border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    }
  }

  .main-body {
    background-color: #ffffff;
    padding: 20px 200px;

    .column {
      .column-header {
        text-align: center;

        h2 {
          display: inline-block;
          line-height: 54px;
          font-size: 26px;
          color: #7b7b7b;
          border-bottom: 1px solid #fc8230;
        }
      }

      .column-body {
        display: flex;
        padding-top: 30px;
        position: relative;
        padding-bottom: 50px;
        border-bottom: 1px solid #ebebeb;

        .column-img-mystory {
          width: 250px;
          background-image: url('../../../static/images/mystory.png');
          background-repeat: no-repeat;
          background-position: center;
        }

        .column-img-feedback {
          width: 250px;
          background-image: url('../../../static/images/feedback.png');
          background-repeat: no-repeat;
          background-position: center;
        }

        .column-content {
          flex: 1;

          p {
            line-height: 30px;
            margin: 15px 0;
            font-size: 18px;
            color: #606060;
          }
        }
      }
    }
  }

  .connect-container {
    display: flex;
    justify-content: space-around;
    padding: 30px 150px 50px 150px;
    position: relative;
    margin: -20px 0 10px 0;

    .connect-item {
      .img-item {
        width: 100%;
        height: 68%;
        background-image: url('../../../static/images/help-icons.png');
        background-repeat: no-repeat;
      }

      .img-qq {
        background-position: 50% 0;
      }

      .img-email {
        background-position: 50% 50%;
      }

      .img-feedback {
        background-position: 50% 100%;
      }

      p {
        margin-top: 10px;
        line-height: 20px;
        text-align: center;
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
