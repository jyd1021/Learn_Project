//对于axios进行二次封装
import axios from "axios";

//利用axios对象的方法create，去创建一个axios实例
const request = axios.create({
    //配置对象

    //基础路径
    baseURL:"/api",
    //超时请求5s
    timeout:5000,
});
//请求拦截器，再发请求之前，请求拦截器可以监测到，可以在请求发出前做一些事情
requests.interceptors.request.use((config) => {
    //config：配置对象，对象里面有一个header请求头
    return config;
});

//拦截器
requests.interceptors.response.use((res) =>{
    //成功的回调函数
    return res.data;
},(error) => {
    //失败的回调函数
    return Promise.reject(new Error('faile'));
});

//对外暴露
export default requests;