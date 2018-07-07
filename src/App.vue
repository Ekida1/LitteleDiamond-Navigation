<template>
  <div id="app">
    <el-menu :default-active="this.$route.path" class="el-menu-demo header-nav" :router="true" mode="horizontal" @select="handleSelect">
      <div class="logo">
        <img class="logo-img" src="static/images/diamond.png" alt="">
        <p class="logo-text">小钻石前端导航</p>
      </div>
        <el-menu-item index="/index/buildingtools">前端导航首页</el-menu-item>
        <el-menu-item index="/techtheme">技术专题</el-menu-item>
        <el-menu-item index="/goodpick">优站精选</el-menu-item>
        <el-menu-item index="/myplug">我的插件</el-menu-item>
        <el-menu-item index="/rank">排行榜</el-menu-item>
        <el-menu-item index="/message">我要留言</el-menu-item>
        <el-menu-item index="/aboutus">关于本站</el-menu-item>
</el-menu>
    <!-- <keep-alive> -->
    <router-view/>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "/index/buildingtools"
    };
  },
  computed: {
    calcuFirstIndex() {
      return this.$route.path;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="stylus" scoped>
.header-nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;

  .logo {
    float: left;
    width: 210px;
    height: 60px;
    padding-left: 10px;
    color: #000;
    display: flex;
    align-items: center;

    // justify-content: center;
    .logo-img {
      float: left;
      width: 38px;
    }

    .logo-text {
      float: left;
      margin-left: 10px;
      font-size: 18px;
    }
  }
}
</style>
