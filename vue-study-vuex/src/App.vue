<template>
  <div id="app">
    <Parent />
    <hr />
    <Child />
    <hr />
  </div>
</template>

<script>
import Parent from "./views/Parent";
import Child from "./views/Child";
import { mapGetters } from "vuex";
export default {
  components: {
    Parent,
    Child
  },
  computed: {
    ...mapGetters(["newNames"])
  },
  mounted() {
    // console.log(this.$store.getters.newNames);//直接取到
    console.log(this.newNames); //使用mapGetters映射成computed方法
  }
};
</script>
<style lang="scss">
#app {
  margin: 20px;
}
</style>
