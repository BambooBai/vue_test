import Center from '_v/center'
import Version from '_v/version'

//默认情况下，只有首页默认显示，其他点击时才加载组件;
//优点：性能高：()=>import()
//缺点：懒加载可能导致白屏

export default [
    {
        path:'/',
        redirect:{path:'/center'}  //默认地址，路径
    },
    {
        path:'/center',
        name:'center',
        components:{
            default:Center,
            version:Version    //添加多个试图，根据属性名匹配
        }
        // component:Center
    },
    {
        path:'/dan',
        name:'dan',
        component:()=>import('_v/dan.vue'),
        meta:{needLogin:true}   //路由元信息
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('_v/login.vue')
    },
    {
        path:'/myone',
        name:'myone',
        component:()=>import('_v/my/one.vue')
    },
    {
        path:'/mytwo',
        name:'mytwo',
        component:()=>import('_v/my/two.vue')
    },
    {
        path:'/message',  
        name:'message',
        component:()=>import('_v/message.vue'),
        children:[         //二级路由，注意，有二级路由时，在app.vue中：使用path跳转
            //  <router-link :to="{path:'/message'}">消息中心</router-link>
            {
                path:'',//路径默认不能加/
                redirect:{name:'one'}
            },
            {
                name:'one',
                path:'one',//路径默认不能加/
                component:()=>import('_v/message/one.vue')
            },
            {
                path:'two',
                name:'two',
                component:()=>import('_v/message/two.vue')
            },{/*  */
                path:'three/:id',
                name:'three',
                component:()=>import('_v/message/three.vue')
            }
         ]
    },
    
    {
        path:'*',
        component:()=>import('_v/404.vue')
    }
]