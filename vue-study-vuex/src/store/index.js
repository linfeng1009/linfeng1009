import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sum: 10
  },
  mutations: {
    increment(state, params) {
      console.log(state, params)
      state.sum++;
    },
  },
  actions: {
    asyncIncrement(context) {
      console.log(context)
      setTimeout(() => {
        context.commit('increment')
      }, 1000);
    }
  },
  modules: {},
  getters: {}
})