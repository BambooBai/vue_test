import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
Vue.config.productionTip = false
Vue.use(ElementUI);

router.beforeEach((to,from ,next)=>{
  let needLogin = to.matched && to.matched.some(({meta})=>{
   return meta && meta.needLogin
  });
  let isLogin = localStorage.getItem('login');//这里可以直接在浏览器中添加
  if(needLogin){
    if(isLogin){
      next();
    }else{
      next({name:'login'});
    }
  }else{
    // 如果不需要登录 并且是登录页面
    if(!(to.name == 'login' && isLogin)){
      next();
    }
  }
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
