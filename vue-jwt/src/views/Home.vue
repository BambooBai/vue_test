<template>
  <div class="home">
    <div v-if="username!==''"> 用户名：{{username}}</div>
    <div v-else>
      <router-link :to="{name:'login'}">请登录</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getUser } from  '../api/user.js'
import { mapState } from 'vuex'

export default {
  name: 'home',
  computed:{
      ...mapState(['username'])
  },
  // get方法
  // async mounted(){
  //     let g= await getUser();
  //     console.log(g);
  // }
}
</script>
