import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'  //存放映射表

Vue.use(VueRouter)
//第三方插件引入后，要使用Vue.use()
//install 方法中注册两个全局组件：
//- router-link
//- router-view

//会在每个组件上定义两属性 $router $route this.$router this.$route
export default new VueRouter({
    mode:'hash',
    routes
})