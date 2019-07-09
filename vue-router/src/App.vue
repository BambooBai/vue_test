<template>
<div id="app">
<el-menu
 :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="center"><router-link :to="{name:'center'}">处理中心</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="myone"><router-link :to="{name:'myone'}">选项1</router-link></el-menu-item>
    <el-menu-item index="mytwo"><router-link :to="{name:'mytwo'}">选项2</router-link></el-menu-item>
  </el-submenu>
  <!-- 消息中心:包含二级路由，这里使用path跳转 -->
  <el-menu-item index="message"><router-link :to="{path:'/message'}">消息中心</router-link></el-menu-item>
  <el-menu-item index="dan"><router-link :to="{name:'dan'}">订单管理</router-link></el-menu-item>
</el-menu>
<div class="contain">
  <router-view></router-view>
</div>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app', data() {
      return {
        activeIndex2: this.$route.name
      };
    },
    watch:{
      $route(){
          this.activeIndex2=this.$route.fullPath.split('/')[1];
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {
      HelloWorld
    }
}
</script>

<style scoped lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  .el-menu-item{
    a{
      display: block;
      text-decoration: none;
    }
  }
  .contain{
    // width: 1024px;
    // margin:20px auto;
  }
}

</style>
