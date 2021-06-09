import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import $request from './config/request'
Vue.prototype.$request = $request;
import Toast from './components/Toast/Toast.js';//引入就Toast.js
Vue.use(Toast);

new Vue({
  render: h => h(App),
}).$mount('#app')
