<template>
  <ul class="list-group">
    <li
      class="list-group-item d-flex justify-content-between"
      v-for="(item, index) in doneTodos"
      :key="'doneTodos' + index"
    >
      {{ item.value }}
    </li>
  </ul>
</template>

<script lang="ts">
import store from '@/store'
import { computed, defineComponent, reactive } from 'vue'

export default defineComponent({
  setup () {
    return reactive({
      doneTodos: computed(() => store.state.dones)
    })
  }
})
</script>

<style scoped></style>
