//对于axios进行二次封装
import axios from "axios";

//引入进度条
//start：进度条开始 done：进度条结束
import nprogress from "nprogress";
//引入进度条的样式
import "nprogress/nprogress.css"


//利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
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

    //进度条开始运行
    nprogress.start();
});

//响应拦截器
requests.interceptors.response.use((res) =>{
    //进度条结束
    nprogress.done();


    //成功的回调函数
    return res.data;
},(error) => {
    //失败的回调函数
    return Promise.reject(new Error('faile'));
});

//对外暴露
export default requests;