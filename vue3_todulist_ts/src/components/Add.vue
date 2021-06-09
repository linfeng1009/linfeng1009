<template>
  <div class="form-group">
    <div class="d-flex">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="inputValue"
        @keydown.enter="add(inputValue)"
      />
    </div>
    <small id="emailHelp" class="form-text text-muted">按下回 车即可添加</small>
  </div>
  <ul class="list-group">
    <li
      class="list-group-item d-flex justify-content-between"
      v-for="(item, index) in todos"
      :key="'todo' + index"
    >
      <div class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          :checked="item.checked"
          @change="done($event, index, item)"
          :id="'input_' + index"
        />
        <label
          class="form-check-label"
          :class="item.checked ? 'del' : ''"
          :for="'input_' + index"
        >
          {{ item.value }}</label
        >
      </div>
      <button type="button" class="btn btn-primary" v-if="!item.checked" @click="delect(index)">
        删除
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import store from '@/store'
import { ItemConfig } from '../config/interface'

import { computed, defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  setup () {
    const inputValue = ref('')
    const add = (value: string) => {
      if (value.trim() === '') return
      store.commit('add', value)
      inputValue.value = ''
    }
    const delect = (index: number) => {
      store.commit('delect', index)
    }
    const done = (
      e: { target: { checked: boolean } },
      index: number,
      item: ItemConfig
    ) => {
      const payload = {
        index,
        checked: e.target.checked,
        item
      }
      store.commit('done', payload)
    }
    return reactive({
      inputValue,
      todos: computed(() => store.state.todos),
      add,
      delect,
      done
    })
  }
})
</script>
<style scoped>
.form-control {
  width: 80%;
}
.btn {
  width: max-content;
}
.del {
  text-decoration: line-through;
}
</style>
