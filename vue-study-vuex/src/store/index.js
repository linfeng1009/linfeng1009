import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sum: 10,
    names: ["临枫枫", "临啊枫", "小枫枫", "阿枫", "biubiu~"]
  },
  mutations: {
    increment(state, payload) {
      console.log(state, payload);
      state.sum++;
    },
    decrement(state) {
      state.sum--;
    }
  },
  actions: {
    asyncIncrement(context, payload) {
      console.log(payload);
      setTimeout(() => {
        context.commit("increment");
      }, 1000);
    }
  },
  modules: {},
  getters: {
    newNames: state => state.names.filter(name => name.includes("枫"))
  }
});
