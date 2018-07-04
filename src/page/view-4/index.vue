<template>
    <main>
        
        <aside>
            <p>-首页-</p>
        </aside>

        <div class="container">
            有时候一个组件需要显示多个视图，即组件内显示多个&lt;route-view/&gt;标签。
            这时候命名路由者派上用处，实际只需要几个简单的配置~
            <pre>
                以本页面的的路由配置为例，配置如下：
                1、compoonent 该成 components
                2、default 表示默认的视图，不指定名称时默认使用会渲染该组件
                3、use:命名视图，指定名称时渲染该组件
                <code>
                    {
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
                    }
                </code>

                <hr/>
                在组件使用默认子嵌套路由:
                &lt;router-view/&gt;

                在组件中使用命名路由
                &lt;router-view name=&quot;user&quot;/&gt;
            </pre>

            <router-view></router-view>
            <router-view name="user"></router-view>
        </div>
    </main>
</template>
<style>
    aside{
        border-right: 1px #CCC solid;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 200px;
        box-shadow: -4px 0px 17px -1px;
    }
    aside p{
        line-height: 40px;
        margin-top: 20px;
        background: #ccc;
        color: white;
        padding-left: 20px;
        user-select: none;
        cursor: pointer;
    }
    .container{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 200px;
        padding: 20px;
        overflow: auto;
    }
</style>
