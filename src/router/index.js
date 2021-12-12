//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//以内路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search';

//配置路由
export default new VueRouter({
    //配置路由
    router:[
        {
            path:"/home",
            component:Home
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/register",
            component:Register
        },
        {
            path:"/search",
            component:Search
        },
        //重定向
        {
            path:'*',
            redirect:"/home"
        }
    ]
})