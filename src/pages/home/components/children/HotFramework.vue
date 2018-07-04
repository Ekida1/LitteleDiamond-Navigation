<template>
  <div class="basement">
    <banner :bannerName="bannerName"></banner>
    <main-container :toolLists="toolLists"></main-container>
  </div>
</template>

<script>
import banner from "./banner/Banner";
import mainContainer from "./mainContainer/MainContainer";
export default {
  name: "hotFramework",
  data() {
    return {
      bannerName: "",
      toolLists: []
    };
  },
  components: {
    banner,
    mainContainer
  },
  methods: {
    getHotFrameDatas() {
      this.$http({
        url: "./api/hotFramework.json",
        methods: "GET"
      }).then(
        res => {
          res = res.body;
          if (res.success && res.data) {
            const data = res.data;
            this.toolLists = data.toolLists;
            this.bannerName = data.moduelName;
          }
        },
        () => {
          console.log("hotFramework-error");
        }
      );
    }
  },
  mounted() {
    this.getHotFrameDatas();
  }
};
</script>

<style lang="stylus" scoped>
.basement {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
