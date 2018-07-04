<template>
    <main>
        <aside>
            <p @click="togglePage('/view-3/home')">首页</p>
            <p @click="togglePage('/view-3/user')">用户管理</p>
        </aside>


        <div class="container">
            <pre>
            通常在一个应用程序中,一个页面由多层嵌套的组件形成.单一的页面结构已经无法满足实际的需求,页面组件化在一定程度上,让代码结构更加清晰,易维护

            嵌套路由的配置,如下:配置嵌套路由在父路由器中添加 children 属性子路由的元素 => 
            在父路由页面添加 “&lt;router-view&gt;&lt;/router-view&gt;” 标签,
            当路由配置到/view-2/home时 ， view-4/index.vue 页面会渲染在该标签中!
                <code>
                    {
                        path:'/view-3',
                        component:routerComponents('view-3/index.vue'),
                        children:[
                            {
                                path:'home',
                                component:routerComponents('view-4/index.vue')
                            },
                            {
                                path:'user',
                                component:routerComponents('view-4/index-1.vue')
                            }
                        ]
                    }
                </code>
            </pre>

            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return{
            falg:false,
        }
    },
    methods:{
        togglePage(path) {
            this.$router.replace(path);
        },
        btn() {
            this.falg = this.falg == true ? false : true;
        }
    }
}
</script>
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

