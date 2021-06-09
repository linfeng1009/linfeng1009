<template>
  <div class="about">
    我是about组件 当前求和为：
    {{$store.state.sum}}
    <br>
    <button>点我-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
</style>