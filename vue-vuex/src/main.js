import Vue from 'vue'
import App from './App.vue'
import store from './store/index';

Vue.config.productionTip = false

//如果页面中注入了store ，每个实例上都会有一个属性 $store

new Vue({
  render: h => h(App),
  store
 
}).$mount('#app')
