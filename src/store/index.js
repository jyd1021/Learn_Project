import Vue from 'vue'
import Vuex from 'vuex'
//需要使用插件一次

Vue.use(Vuex);
//STATE:仓库村春数据的地方
const state = {}
//mutations：修改state的唯一手段
const mutations = {}

//actions：可以书写自己的业务逻辑
const actions = {}
//getters：计算属性，用于简化仓库数据，让组件获取仓库数据更方便
const getters = {}

//对外暴露一个store的一个实例
export default new  Vuex.Store({
    state,
    mutations:,
    actions,
    getters

})


