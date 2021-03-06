import Vue from 'vue'
import Vuex from 'vuex'
import { login ,validate } from './api/user'
import { setLocal } from './libs/local'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowLoading:false,
    username:'',
  },
  mutations: {
   showLoading(state){
     state.isShowLoading=true;
   },
   hideLoading(state){
     state.isShowLoading=false
   },
   setUser(state,username){
     state.username=username;
   }
  },
  //存放着接口调用
  actions: {
    async toLogin({commit},payload){  //store.dispatch('toLogin');
      let res= await login(payload);

      if(res.code===0){//成功登录
          commit('setUser',res.username);
          //将token  保存到客户端上  每次请求时带上token  ，服务端校验token，如果token不正确或者过期，没登录
          setLocal('token',res.token);
      }else{
        return Promise.reject(res.data);
      }
    },
    async toValidate({commit}){  //store.dispatch('toLogin');
      let res= await validate();

      if(res.code===0){
          commit('setUser',res.username);
          setLocal('token',res.token);
      }
      return res.code===0//返回用户是否失效
    }
  }
})
