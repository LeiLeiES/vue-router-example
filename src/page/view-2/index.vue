<template>
    <main>
        <p class="title-tip margin-t-0">动态路由的配置</p>
        <p>页面路由接收到的参数：{{params}}</p>

        <pre>
            动态路由配置：
            {
                //动态路由的配置 => /:id
                path:'/view-2/:uid/:name',
                component:routerComponents('view-2/index.vue')
            },
            导航路由
            this.$router.push('view-2/439820/GuanQun')
            <hr/>
            通过this.$router.params 获取组件路由后的参数。
        </pre>
    </main>
</template>
<script>
export default {
    data() {
        return {
            params:''
        }
    },
    created() {
        this.params = this.$route.params;
    }
}
</script>

