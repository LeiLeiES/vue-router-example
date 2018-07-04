<template>
    <main>
        <h1>编程式的导航</h1>
        <!-- <router-link> 组件导航 -->
        <div>
            <p class="title-tip" style="margin-top:0">使用router-link 组件组件导航</p>
            <pre>
            使用组件导航,to指定路由目标地址.
            &lt;router-link to=&quot;/view-2&quot;&gt;&lt;/router-link&gt;
            </pre>
        </div>


        <!-- this.$router.push() 路由导航 -->
        <div>
            <p class="title-tip">this.$router.push</p>
            <pre>
            调用this.$router.push() ,这个方法会在history添加一条新的纪录.使用router-link 组件导航等同于调用该方法。

            使用示例
                1、this.$router.push('home');
                2、this.$router.push({path:'home'});
                3、this.$router.push({name:'name',params:{userId:'userId'}});
                4、this.$router.push(path:'path'，query:{text:'text'});
            </pre>

            <div class="x-btn" @click="routerpush_0('get-1')">字符创：this.$router.push('name')</div>
            <div class="x-btn" @click="routerpush_1('get-1')">对象：this.$router.push({path:'path'})</div>
            <div class="x-btn" @click="routerpush_2('get-1')">命令路由：this.$router.push({name:'name',params:{userId:'userId'}})</div>
            <div class="x-btn" @click="routerpush_3('get-1')">带查询参数路由：this.$router.push({path:'path',query:{text:'text'}})</div>
        </div>

        <!-- this.$router.replace() 路由导航 -->
        <div>
            <p class="title-tip">this.$router.replace</p>
            <pre>
                replace()跟push()很像,唯一不同的是,replace不会向history添加新的纪录-- 替换掉当前的history纪录

                使用示例
                1、this.$router.replace('home');
                2、this.$router.replace({path:'home'});
                3、this.$router.replace({name:'name',params:{userId:'userId'}});
                4、this.$router.replace(path:'path'，query:{text:'text'});
            </pre>

            <div class="x-btn" @click="routerpush_4('get-1')">this.$router.replace()</div>
        </div>

        <div>
            <p class="title-tip">this.$router.go</p>
            <pre>
                该方法参数是一个整数,类似与window.history.go()方法.,在历史纪录中后退前进的作用.
            </pre>
        </div>

        <h3>vue-router 操作History,实际上是仿造window.history的API,如果对window.history非常熟悉,当然这里只需要了解其路由的写法了.非常简单,虽然你(自己)对window.history 的理解还不够深刻.</h3>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API" target="_blank">访问: https://developer.mozilla.org/en-US/docs/Web/API/History_API</a>
    </main>
</template>
<script>
export default {
    created() {
    },
    methods:{
        routerpush_0(path) {
            this.$router.push(path);
        },
        routerpush_1(path) {
            this.$router.push({
                path:path
            });
        },
        /**
         * 命名路由
         */
        routerpush_2(path) {
            this.$router.push({
                name:'get-1',
                params:{
                    userId:'431103'
                }
            })
        },
        /**
         * 路由切换，带查询参数
         */
        routerpush_3(path){
            this.$router.push({
                path:path,
                query:{
                    userId:'431103',
                    name:'GuanQun'
                }
            });
        },
        routerpush_4(path) {
            this.$router.replace(path);
        }
    }
}
</script>
<style>
    h1{
        margin-top: 0;
    }
</style>


