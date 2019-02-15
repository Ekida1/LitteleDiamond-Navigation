<template>
  <div class="basement">
    <div class="banner">
      <div class="banner-title">
        分享你的声音
      </div>
         <vue-datepicker-local v-model="time" />
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageFooter from "@/pages/Footer";
import VueDatepickerLocal from "vue-datepicker-local";
export default {
  name: "message",
  components: {
    pageFooter,
    VueDatepickerLocal
  },
  data() {
    return {
      time: new Date()
    };
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
    background-image: url('../../../static/images/aboutUs-banner.jpg');
    background-position: center;
    background-size: cover;

    // background-attachment: fixed;
    .banner-title {
      width: 358px;
      height: 100px;
      line-height: 100px;
      position: absolute;
      top: 40%;
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
