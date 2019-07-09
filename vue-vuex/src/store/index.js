import Vue from 'vue'
import vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';

import  user from './modules/user';

Vue.use(vuex);

export default new vuex.Store({
    modules:{
        user
    },
    strict:process.env.NODE_ENV!=='production',//校验更改状态的合法性
    actions,
    mutations,
    getters,
    state
})