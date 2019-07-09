<template>
    <div id="message">
        <br>
       <el-row>
         <el-col :span="4">
          <el-menu
            :default-active="active"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            @select="elSelect"
            :router="isRouter"
            active-text-color="#ffd04b">
                <router-link :to="{name:'one'}">
                    <el-menu-item index="/message/one">
                        <i class="el-icon-menu"></i>
                        <span slot="title"> 所有消息 </span>       
                    </el-menu-item>
                </router-link> 
                <router-link :to="{name:'two'}">
                    <el-menu-item index="/message/two">
                        <i class="el-icon-document"></i>
                        <span slot="title">  系统消息</span>                        
                    </el-menu-item>
                </router-link>
            </el-menu>
         </el-col>
         <el-col :span="17">
            <el-button type="primary" @click="toLogin">'push'登录</el-button>
            <div class="contain1">
                <router-view></router-view>
            </div>
         </el-col>
       </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            active:'/message/one',
            isRouter:false,
        }
    },
    methods:{
        toLogin(){
            this.$router.push({name:'login'});
        },
        elSelect(one){
            console.log(one)
            const curRoute=this.$route;
            console.log(curRoute)
            // if(one!==curRoute){
            //     return false
            // }
            this.active='/message/one'
            console.log('active',this.active)
        }
    }
}
</script>
<style scoped lang="less">
#message {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  .el-row {
      position: relative;
    button{
        position: absolute;
        right: 10px;
        top:20px;
    }
     a{
        text-decoration: none;
    }
  }
  .contain1{
      padding-left: 25px;
  }
}

</style>
