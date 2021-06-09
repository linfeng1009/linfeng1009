# vue-study-vuex

# 配置

### store.js

```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  getters: {}
})

```

### main.js

```
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

```

## state
### 使用 state 提交 存储一个数据
  state: {
    sum: 10,
    names: ["临枫枫", "临啊枫", "小枫枫", "阿枫", "biubiu~"]
  },

在组件或者页面中直接使用this.$store.state.sum即可取到对应的值


## mutations
### 使用 commit 提交 mutations

state 里面的状态是无法直接去更改的
需要借助 mutations 才能修改 state 里面的状态
例如想让：state 里面的 sum 变量 加 1
就需要 mutations 里面定义一个方法 increment
默认会接收到 state 参数 和一个自定义传入参数 payload
  mutations: {
    increment(state, payload) {
      state.sum++;
    },
  },
然后在页面中使用：
this.\$store.commit('increment')
便可执行 mutations 里面的 increment 方法 致使状态 sum 进行更新(+1)

**_ 注：mutations 里面无法进行异步操作 所以 异步操作需要使用 actions _**

## actions的用法
### 使用 dispatch 分发一个异步的 actions 然后再提交 mutations

  例如我们现在有个异步操作：延迟一秒进行+1
  我们在actions里面定义一个asyncIncrement方法
  默认会接收到 context 参数 和一个自定义传入参数 payload
  actions: {
    asyncIncrement(context,payload) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000);
    }
  },
  这样我们在asyncIncrement方法里面执行完异步操作 
  然后再通过默认参数context里面的commit提交给mutations
  通过mutations的increment方法进行更改state



## getter
  getter里面可以将state里面的数据进行操作并返回成一个新数据 但不会影响state的数据的


## Project

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
