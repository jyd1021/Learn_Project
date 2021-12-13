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
//保存VueRouter原型对象的push

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push和replace
//第一个参数：告诉原来的push方法，往哪里跳转（传递参数）
//第二个参数：成功的回调
//第三个参数：失败的回调
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        //call||apply 相同：都可以调用函数一次，都可以篡改函数的上下文一次
                    //call传递参数用逗号，apply传递数组
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }

}

VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        //call||apply 相同：都可以调用函数一次，都可以篡改函数的上下文一次
                    //call传递参数用逗号，apply传递数组
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }

}



//配置路由
export default new VueRouter({
    //配置路由
    router:[
        {
            path:"/home",
            component: Home,
            meta:{show:true}
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}

        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        {
            path:"/search/:keyword?",
            component:Search,
            meta:{show:true},
            name:"search",
            //路由组件能不能传递props数据？
            //布尔值写法 只能parmas
            //props:true,
            //对象写法 额外给props
            //props:{a:1,b:2},
            //函数写法 可以params参数，query参数，通过props传递给路由组件
            /*
            props:($route) => {
                return {keyword:$route.params.keyword,k:$route.query.k}
            }*/

        },
        //重定向
        {
            path:'*',
            redirect:"/home"
        }
    ]
})