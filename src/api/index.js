//当前模块，APi进行统一管理
import requests from "./request";

//三级联动的接口
//api/product/getBaseCategeoryList get 无参数

export  const reqCategeoryList  = () => {
    //发请求 axios发请求返回结果Promsie的对象
    requests({url:'/product/getBaseCategoryList',method:'get'});

}