<template>
    <div>
       消息详情
        id为：
        <p>问号传参为： {{this.$route.query&&this.$route.query.id}}</p>
        <p>路由匹配传参为： {{this.$route.params&&this.$route.params.id}}</p>
    </div>
</template>
<script>
export default{
    beforeRouteEnter(to,from,next){
        console.log(to)
       
        next(function(vm){
             console.log(vm.$route);
        });
    }
}
</script>
