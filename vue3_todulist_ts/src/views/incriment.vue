<template>
  <div class="home">
    <h3>我是Home页面</h3>
    <HelloWorld @getChildData="getChildData" />
    <div>
      <input type="number" v-model="state.num1" />
      -
      <input type="number" v-model="state.num2" />
      =
      {{ state.result }}
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, computed } from 'vue'
export default defineComponent({
  setup () {
    const state: any = reactive({
      name: '哈哈',
      num1: 0,
      num2: 0,
      result: computed(() => state.num1 * state.num2)
    })
    const getChildData = (data: string) => {
      console.log(data)
    }
    return {
      state,
      getChildData
    }
  }
})
</script>
