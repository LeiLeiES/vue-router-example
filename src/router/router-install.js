//路由配置项
//标记：import 类似与node.js require 的写法。不同于import是异步加载，而require是同步加载。vue 异步加载组件需要明确指定其文件夹路径：@page/...,否者会报错：at webpackAsyncContext (eval at ./src/router lazy recursive ^.*$
const routerComponents = (path) => () => import (`@/page/${path}`);

let addRouter = [
    {
        //重定向页面
        path:'/view-redirect',
        component:routerComponents('view-5/get-1.vue')
    },
    {
        //404 处理
        path:'*',
        component:routerComponents('404.vue')
    }
]

//配置所有路由对象
const components = [
    ...addRouter,
    {
        path:'/',  
        props:true,
        component:routerComponents('home.vue')
    },
    {
        //路由的基本配置
        path:'/view-0',
        component:routerComponents('view-0/index.vue')
    },
    {
        //路由导航的处理
        path:'/view-1',
        component:routerComponents('view-1/index.vue')
    },
    {
        path:'/get-1',
        name:'get-1',
        component:routerComponents('view-1/get-1.vue')
    },
    {
        //动态路由的配置 => /:id
        path:'/view-2/:uid/:name',
        component:routerComponents('view-2/index.vue')
    },
    {
        //嵌套路由的配置
        path:'/view-3',
        component:routerComponents('view-3/index.vue'),
        children:[
            {
                //当view-3/home 路由匹配成功时,view-4/index.vue会被渲染到view-3 中的<router-view>标签中.
                path:'home',
                component:routerComponents('view-3/get-1.vue')
            },
            {
                path:'user',
                component:routerComponents('view-3/get-2.vue')
            }
        ]
    },
    {
        //命名路由配置
        path:'/view-4',
        component:routerComponents('view-4/index.vue'),
        children:[
            {
                path:'/',
                components:{
                    default:routerComponents('view-4/get-1.vue'),
                    user:routerComponents('view-4/get-2.vue')
                }
            }
        ]
    },
    {
        //路由的重定向配置
        path:'/view-5',
        redirect:'/view-redirect',
        component:routerComponents('view-5/index.vue')
    },
    {
        //路由组件之间的传参
        path:'/view-6',
        component:routerComponents('view-6/index.vue'),
        children:[
            {
                path:'/',
                components:{
                    views:routerComponents('view-6/get-1.vue')
                },
                props:{
                    views:true
                }
            }
        ]
    },
    {
        // HTML5 History模式、404页面配置
        path:'/view-7',
        component:routerComponents('view-7/index.vue')
    },
    {
        //导航守卫
        path:'/view-8',
        component:routerComponents('view-8/index.vue'),
        meta:{
            title:'导航守卫',
            iconfont:'iconfont test',
        }
    },
    {
        // 异步加载组件的使用方法
        path:'/view-9',
        component:routerComponents('view-9/index.vue')
    }
]

export default components;