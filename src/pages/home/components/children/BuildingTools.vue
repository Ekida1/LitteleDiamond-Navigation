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
  name: "buildingTools",
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
    getBuildingToolsDatas() {
      this.$http({
        url: "./api/buildingTools.json",
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
          console.log("BuildingTools-error");
        }
      );
    }
  },
  mounted() {
    this.getBuildingToolsDatas();
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
