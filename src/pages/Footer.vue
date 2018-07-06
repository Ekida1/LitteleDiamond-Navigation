<template>
        <div class="footer">
      <p>
        <a href="">关于本站</a>
        <a href="">Ekida的小屋</a>
        <a href="">其他</a>
      </p>
      <p>
        Copyright © 2015-
        <span>
          <!-- {{}} -->
          2018
          </span>
          <a href="">Ekida1.com</a>
      </p>
      <p>
        All Rights Reserved.
        <a href="">Ekida</a>
        版权所有
        <a href="">粤ICP备2133213号-1</a>
      </p>
    </div>
</template>
<script>
export default {
  name: "page-footer"
};
</script>

<style lang="stylus" scoped>
.footer {
  padding: 16px 20px;
  background-color: #ddd;
  border-top: 1px solid #d0d0d0;
  font-size: 14px;
  text-align: center;
  color: #5d5d5d;

  p {
    line-height: 24px;

    a {
      color: #5d5d5d;
    }
  }
}
</style>
