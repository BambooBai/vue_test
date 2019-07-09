export default{
    namespaced:true,//不加namespace就默认到根
    state:{
        username:'用户名小白'
    },
    getters:{
        getNewUsername(state){//当前模块的状态
            return state.username+'啦啦啦啦'
        }
    },
    mutations:{
        change_username(state,payload){
            alert('3');
            state.username=payload;
            
        }
    },
    actions:{
        change_user(state,payload){
            alert('哈哈');
        },
        change_username({commit},payload){
            setTimeout(()=>{
                commit('change_username',payload);
            })
        }
    }
}