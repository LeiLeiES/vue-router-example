<template>
    <main>
        <div class="x-btn" @click="push('view-0')">0、Vue-Router 的使用以及参数配置</div>

        <div class="x-btn" @click="push('view-1')">1、路由切换--页面跳转</div>

        <div class="x-btn" @click="push('view-2/439820/GuanQun')">2、动态路由的配置</div>

        <div class="x-btn" @click="push('view-3/home')">3、嵌套路由的使用</div>

        <div class="x-btn" @click="push('view-4')">4、命名视图(命令路由)</div>

        <div class="x-btn" @click="push('view-5')">5、路由的重定向概念与配置</div>

        <div class="x-btn" @click="push('view-6')">6、路由组件的传参</div>

        <div class="x-btn" @click="push('view-7')">7、HTML5 History模式、404页面配置</div>

        <div class="x-btn" @click="push('view-8')">8、导航守卫</div>

        <div class="x-btn" @click="push('view-9')">9、路由懒加载--异步加载组件的使用方法</div>
    </main>
</template>
<script>
/**
 * 当路由初始化实例时，我们可以在任何一个组件内访问页面路由对象。
 * this.$router ： 全局访问，返回路由配置对象
 * this.$route ： 组件访问，返回当前的路由配置对象
 */
export default {
    data() {
        return{
        }
    },
    created() {
        console.log('所有路由对象\n'+JSON.stringify(this.$router.options));
    },
    methods:{
        push(page) {
            this.$router.push('/'+page);
        }
    }
}
</script>

