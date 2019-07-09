<template>
  <div id="app">

    <h2>麻烦的写法：</h2>
    state.js中：{{$store.state.name}}
    <br/>
    getters.js中：{{$store.getters.getNewName}}
    <br/>
    模块下user.js：{{$store.state.user.name}}

    <h2>辅助函数；状态映射</h2>
    根模块下state：{{name}}  <br/>
    根getters.js：{{getNewName}} <br/>
    子模块下state：{{username}} <br/>
    子getters.js：{{getNewUsername}}


    <input type="button" value="change" @click="change"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {mapState,mapGetters,createNamespacedHelpers,mapMutations,mapActions} from 'vuex';

console.log(mapState(['name','age','class']));//key value形式

//方式二：
//let {mapState,mapGetters}=createNamespacedHelpers('user');
//...mapState(['username'])

//推荐第一种方式
//如果改名字  需要通过对象形式传递参数
//...mapState('user',{u:s=>s.username})

//注意：如果状态相同，会覆盖，子覆盖父
export default {
  name: 'app',
  computed:{
    // 方式一 :状态映射
    ...mapState(['name','age']) ,  //根模块

    //如果使用的是子模块，可以增加namespaced属性，把它变成一个模块
    ...mapState('user',['username']),  //子模块
    ...mapGetters(['getNewName']),
    ...mapGetters('user',['getNewUsername']),
  },
  methods:{
    ...mapMutations('user',['change_username']),
    change(){
      // this.$store.commit('change_username','jw')  commit对应的是mutations
      this['change_username']('jw')   //mutations
      this.$store.dispatch('user/change_user1','jw')  //dispatch对应的是actions
    }
  }

}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left:15px;
}
</style>
