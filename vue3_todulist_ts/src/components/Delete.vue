<template>
  <ul class="list-group">
    <li
      class="list-group-item d-flex justify-content-between"
      v-for="(item, index) in todos"
      :key="'todo' + index"
    >
      <div class="form-check">
        <label class="form-check-label" for="exampleCheck1">{{ item.value }}</label>
      </div>
      <button type="button" class="btn btn-primary" @click="delect(index)">
        删除
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import store from '@/store'
import { computed, defineComponent, reactive } from 'vue'
export default defineComponent({
  setup () {
    return reactive({
      todos: computed(() => store.state.deletes)
    })
  }
})
</script>

<style scoped></style>
