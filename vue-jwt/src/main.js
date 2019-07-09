import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css';

let whiteList=['/xxx'];

router.beforeEach(async (to,from,next)=>{
  let isLogin=await store.dispatch('toValidate');
  let needLogin=to.matched.some(match=>match.meta.needLogin);
  if(whiteList.includes[to.path]){//在白名单中
    next();
  }
  if(needLogin){
    if(isLogin){
        next();
    }else{
      next('/login');
    }
  }else{
    if(isLogin&&to.path.name==='login'){
      next('/');
    }else{
      next();
    }
  }
})
Vue.config.productionTip = false
Vue.use(iView);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//为了更安全，可以服务器设置cookie的方式并且设置成仅读