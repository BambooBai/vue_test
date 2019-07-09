<template>
    <div id="one">
        <p class="title"> 试试输入用户名后点击其他路由看效果哦!&nbsp;&nbsp;这里用到了<span>beforeRouteLeave</span></p>
        <input type="text" placeholder="请输入用户名" v-model="usename">
          <br/><br/><br/>
        <el-row>
          <el-button 
            type="primary" 
            plain 
            @click='toone' 
            size="mini"
            >
                返回系统消息>
            </el-button>
        </el-row>
    </div>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {  //路由钩子函数，离开当前路由页面
    if(this.usename){
        this.dialogVisible = true;
            this.$confirm('确认离开页面吗？')
            .then(_ => {
                next();
            })
            .catch(_ => {});
    }else{
        next();
    }
  },
 
   data() {
      return {
        dialogVisible: false,
        usename:'',
      };
    },
    methods: {
         toone(){
            this.$router.push('/message/two');
        }
    }
};
</script>

<style scoped lang="less">
#one{
    .title{
        color:#132928;
        span{
            color:red;
        }
    }
}
</style>

