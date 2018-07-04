<template>
    <main>
        <p class="title-tip margin-t-0">HTML5 History 模式</p>
        <pre>
            Vue-Router 默认使用得是html dom hash 模式。
            官方解释hash 模式是：（一个可读可写的字符串，该字符串是 URL 的锚部分（从 # 号开始的部分））
            即URL 路由是已“#” 符号连接。 推荐使用HTML5 History 模式，此时url 即不会携带# 难看的连接符。

            vue-router 配置mode
            <code>
                export default new Router({
                    mode:'history',
                    routes
                })
            </code>
        </pre>

        <p class="title-tip">404 页面配置</p>
        <p class="x-btn margin-t-0" @click="gos">404</p>

        <pre>
            如果页面切换，URL匹配不到路由配置对象。则应统一返回一个标识资源地址。如404 页面

            配置所有路径，当URL匹配不到任何资源，则默认渲染到路由组件。
            {
                path:'*',
                component:routerComponents('404.vue')
            }
        </pre>
    </main>
</template>
<script>
export default {
    methods:{
        gos() {
            this.$router.push('/AAAAA');
        }
    }
}
</script>

