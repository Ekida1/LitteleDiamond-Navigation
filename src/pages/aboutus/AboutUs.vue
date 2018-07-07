<template>
  <div class="basement">
       <div class="banner">
      <div class="banner-title">
        关于我们
      </div>
    </div>
    <ul class="main-body">
      <li class="column">
       <div class="column-header"><h2>我的故事</h2></div>
       <div class="column-body">
       <div class="column-img"></div>
       <div class="column-content">
         <p>小钻石前端导航是本人用Vue脚手架搭建的一个本人前端学习经历工具库的收藏夹和使用框架和一些技术大牛博客的总结和收藏，其目的是为了分享更多更优秀的工具和博客，也为自己前端起步打下夯实基础，希望和大家共同努力！</p>
         <p>而现在，已拥有独立域名、空间，功能不断增加，势要做最专业的前端导航网站，所以我们忍不住要把它介绍给你。</p>
       </div>
       </div>
      </li>
    </ul>
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
    padding: 20px 90px;

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

        .column-img {
          width: 250px;
          background-image: url('../../../static/images/mystory.png');
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
