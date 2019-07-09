<template>
    <div id="two">
        这里是系统消息！
        <br/>
        <br/>
        <br/>        <br/>
        点击表格详情查看动态传值方式；
        <div class="content">
        动态传值两种方式：<br/>
        1. 通过路由<span>“:to="{path:`/message/three/${scope.$index}`”</span> <br/>
        <img src="../../../public/1.png"/><br/>
        2. 通过问号传值<span>“:to="{path:`/message/three?id=${scope.$index}`”</span>
        </div>
        <el-table
            :data="tableData"
            style="width: 100%">
                <el-table-column
                label="日期"
                width="180">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                label="姓名"
                width="180">
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                     <template slot-scope="scope">
                    <!--  @click="handleEdit(scope.$index, scope.row)" -->
                        <router-link :to="{path:`/message/three/${scope.$index}`}">
                            <el-button size="mini"> 详情</el-button>
                        </router-link>
                    </template>
                </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    beforeRouteEnter(to,from ,next){ //进入当前路由页面
        //to、from指的是路由name

        // console.log(to,from);
        if(from.name ==='one'){
            console.log('从所有消息进入');
        }
         next(vm=>{
            // console.log(vm);//组件渲染完成后，会调用当前beforeRouterEnter方法
             //当前vm实例
         });
    },
    data(){
        return {
             tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
                }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods:{
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    }
}
</script>
<style scoped lang="less">
#two{
    .content{
        background: #eee;
        padding:15px 10px;
        margin: 10px auto 20px;
        font-size: 12px;
        span{
            color:red
        }
        img{
            margin:5px;
        }
    }
}
</style>
