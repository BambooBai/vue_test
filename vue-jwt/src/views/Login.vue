<template>
    <div>
        <h2>登录</h2>
        <Input type="text" placeholder="请输入用户名" style="width:300px" v-model="username"/>
        <Button type="primary" @click="login">登录</Button>
        (密码是admin，登录成功后试试刷新页面)
    </div>
</template>


<script>
import { mapActions } from "vuex";
export default {
    data(){
        return {
            username:''
        }
    },
    methods:{
        ...mapActions(['toLogin']),
        login(){
            // this.$store.dispatch('toLogin','admin');
           this.toLogin(this.username).then(suc=>{
               this.$Message.success('登录成功');
               this.$router.push('/')
           },rea=>{
                 this.$Message.error(rea);
           })
        }
    }    
}
</script>

