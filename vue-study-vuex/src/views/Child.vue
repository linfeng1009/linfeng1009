<template>
  <div class="about">
    我是child组件 当前求和为：
    {{$store.state.sum}}
    <br>
    <button @click="decrement">点我-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    decrement(){
      this.$store.commit('decrement')
    }
  },
};
</script>
<style lang="scss">
</style>