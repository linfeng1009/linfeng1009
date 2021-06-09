import { createStore } from 'vuex'
import { ItemConfig } from '../config/interface'
export default createStore({
  state: {
    todos: [] as ItemConfig[],
    dones: [] as ItemConfig[],
    deletes: [] as ItemConfig[]
  },
  mutations: {
    add (state, value: string) {
      state.todos.push({
        id: state.todos.length + 1,
        value,
        checked: false
      })
    },
    delect (state, index: number) {
      const delItem: ItemConfig[] = state.todos.splice(index, 1)
      state.deletes.push(...delItem)
    },
    done (
      state,
      payload: {
        index: number
        checked: boolean
        item: ItemConfig
      }
    ) {
      const { index, checked } = payload
      // 改变选中未选中样式
      state.todos[index].checked = checked
      const flag: boolean = state.dones.some((s: ItemConfig) => {
        return payload.item.id === s.id
      })
      if (checked && !flag) {
        // 如果不存在 就添加这条
        state.dones.push(payload.item)
      } else {
        // 如果已完成里面存在,就删掉已完成里面的这条
        const index = state.dones.findIndex(
          (f: ItemConfig) => f.id === payload.item.id
        )
        state.dones.splice(index, 1)
      }
    }
  },
  actions: {},
  modules: {},
  getters: {}
})
