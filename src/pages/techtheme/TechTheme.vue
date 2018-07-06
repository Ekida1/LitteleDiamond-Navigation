<template>
  <div class="basement">
   TechTheme
  </div>
</template>
<script>
export default {
  name: "techTheme"
};
</script>

<style lang="stylus" scoped>
.basement {
  position: absolute;
  top: 61px;
  left: 0;
  right: 0;
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
