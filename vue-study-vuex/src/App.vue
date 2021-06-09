<template>
  <div id="app">
    <Parent />
    <hr>
    <Child />
  </div>
</template>

<script>
import Parent from "./views/Parent";
import Child from "./views/Child";
export default {
  components: {
    Parent,
    Child,
  },
};
</script>
<style lang="scss">
#app{
  margin: 20px;
}
</style>
