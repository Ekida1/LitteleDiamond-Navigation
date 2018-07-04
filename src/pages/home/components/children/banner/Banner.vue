<template>
  <div class="basement">
    <div class="banner">
      {{bannerName}}
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  props: {
    bannerName: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.basement {
  width: 100%;

  .banner {
    width: 100%;
    height: 49px;
    line-height: 49px;
    font-size: 17px;
    padding-left: 20px;
    font-weight: bold;
    color: $ProBlue;
    borderlinebottom();
  }
}
</style>
