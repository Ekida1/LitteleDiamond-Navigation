<template>
  <div class="basement">
    <div class="left-nav">
      <div class="left-nav-title">
        <p class="left-nav-text">前端工具模块</p>
      </div>
      <el-menu :default-active="this.calcuActiveIndex" class="el-menu-vertical-demo" :router="true" @open="handleOpen" @close="handleClose">
        <el-menu-item index="/index/buildingtools">
          <span slot="title">构建工具</span>
        </el-menu-item>
        <el-menu-item index="/index/hotframework">
          <span slot="title">热门框架</span>
        </el-menu-item>
        <el-menu-item index="/index/usetools">
          <span slot="title">工具库</span>
        </el-menu-item>
        <el-menu-item index="/index/techcommunity">
          <span slot="title">技术社区</span>
        </el-menu-item>
        <el-menu-item index="/index/learningplatform">
          <span slot="title">在线学习平台</span>
        </el-menu-item>
        <el-menu-item index="/index/goodblog">
          <span slot="title">前端优秀博客</span>
        </el-menu-item>
        <el-menu-item index="/index/knowndesign">
          <span slot="title">懂点设计</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right-content">
      <keep-alive>
      <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "centerFrame",
  data() {
    return {
      activeIndex: "/index/buildingtools"
    };
  },
  computed: {
    calcuActiveIndex() {
      return this.$route.path || this.activeIndex;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.basement {
  display: flex;

  .left-nav {
    // position: fixed;
    // top: 61px;
    // left: 0;
    width: 220px;
    height: 100vh;
    borderlineright();

    .left-nav-title {
      height: 49px;
      line-height: 49px;
      font-size: 20px;
      borderlinebottom();
      borderlineright();

      .left-nav-text {
        margin-left: 20px;
        ellipsis();
      }
    }
  }

  .right-content {
    flex: 1;
  }
}
</style>
