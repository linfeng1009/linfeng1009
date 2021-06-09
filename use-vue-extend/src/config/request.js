import axios from 'axios';//引入axios
import qs from "qs";//引入序列化对象的库
import router from '@/router';//引入路由 用于拦截状态码为未登录状态进行跳转登录页

//axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '线上环境的接口前缀地址' : '测试环境的接口前缀地址';
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://www.linfengya.cn' : '192.168.3.44:9000';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//请求超时时间 （10s）
axios.defaults.timeout = 10000;

if(process.env.NODE_ENV === 'development'){
    // 开发环境中  使用线上/线下接口
    // axios.defaults.baseURL = 'http://www.linfengya.cn'
    axios.defaults.baseURL = '192.168.3.44:9000'
}else{
    axios.defaults.baseURL = 'http://www.linfengya.cn'
}
// 线上环境 ： 开发环境
// axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? http://www.linfengya.cn : '192.168.3.44:9000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.timeout = 10000;

// 声明一个axios拦截器 服务器返回结果时候判断再返回
axios.interceptors.response.use(res => {
    console.log(res);
    if (res.status === 200) {
        return res.data
    } else if (res.status == 406) {
        // 406 是未登录状态码 (具体问你们后端) 说明用户没登录 直接跳转登录页
        router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
        })
    } else {
        console.log(res);
        return res
    }
}, err => {
    console.error(err)
});
const request = {
    post(url, data = {}) {
        // 判断用户传递的URL是否/开头,如果不是,加上/
        url = url.indexOf('/') == 0 ? url : '/' + url
        // 直接将data序列化
        return axios.post(url, qs.stringify(data))
    },
    get(url, data = {}) {
        url = url.indexOf('/') == 0 ? url : '/' + url
        return axios.get(url + '?' + qs.stringify(data))
    }
};
export default request