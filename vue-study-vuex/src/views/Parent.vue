<template>
  <div class="parent">
    我是Parent组件 当前求和为：
    {{$store.state.sum}}
    <br>
    <button @click="increment">点我+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    increment(){
      // this.$store.commit("increment")
      this.$store.dispatch('asyncIncrement')
    }
  },
};
</script>
<style lang="scss">
</style>