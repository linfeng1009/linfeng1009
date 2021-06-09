import Vue from 'vue';
import Toast from './Toast.vue'//引入Toast组件
const ToastComponent = Vue.extend(Toast);//这样延伸出来的 可以如同new Vue({})一样玩
/**
 * params: showToast Boolean 是否显示toast
 * params: type String       toast提示类型 共normal success，fail，warning
 * params: message String    toast消息
 * params: duration Number   toast显示时间
 * */
function $Toast(message, duration = 3000, type = "normal", showToast = true) {
    const ToastDom = new ToastComponent({
        name: "Toast",
        el: document.createElement("div"),//将Toast组件放在一个div容器里
        data() {//这边创建了data 组件那边就不需要data了
            return {
                message: message,
                type: type,
                showToast: showToast
            }
        }
    })
    document.body.appendChild(ToastDom.$el);//使用原生方法插入到body中
    setTimeout(() => {
        ToastDom.showToast = false;//显示几秒后消失
    }, duration);
}
function initToast() {
    //挂在到this上全局可使用
    Vue.prototype.$Toast = $Toast
}
export default initToast;