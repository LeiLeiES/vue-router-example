<template>
    <main>
        <p class="title-tip margin-t-0">Vue-Router 的定义和使用配置</p>
        <strong style="color: #409eff;">&emsp;&emsp;本实例主要说明如何使用vue-router 以及如何配置路由。当然也非常简单，如果您看了本章实例。结合示例，对项目中使用vue-router基本就没有太大的问题。</strong>

        <div>
            <p>路由参数配置对象详细</p>
            <pre>
                <code>
                    let router = [
                        {
                            path:'/',   //路由导航路径--required
                            name:'',    //命名路由名称
                            id:'',      //标识路由ID
                            component:'',   //路由对应组件对象--required
                            meta:{          //元信息
                                title:'',
                                ...
                            },
                            children:{      //子路由对象
                                path:'users',       //子路由导航路径
                                components:''       //子路由对应组件对象
                            },
                        }
                    ]

                    //实例化vue-router。
                    new Router({
                        mode:'history',
                        routes
                    });
                </code>
            </pre>
        </div>

        <h4>Begin:</h4>
        <!-- CDN安装 -->
        <div>
            <p>如果项目中使用CDN 直接引入的方式加载需要的JS文件</p>
            <pre>
                直接下载 /
                &emsp;&emsp;<a  href="https://unpkg.com/vue-router/dist/vue-router.js" target="_black">https://unpkg.com/vue-router/dist/vue-router.js</a>

            引入vue.js 和 vue-rouer.js
                &emsp;&emsp;&lt;script src=&quot;/path/to/vue.js&quot;&gt;&lt;/script&gt;
                &emsp;&emsp;&lt;script src=&quot;/path/to/vue-router.js&quot;&gt;&lt;/script&gt;
            </pre>
        </div>

        NPM安装
        <div>
            <p>当然我们推荐使用NPM</p>
            <pre>
                npm install vue-router

                import Vue from 'vue'
                import VueRouter from 'vue-router'
                //在模块化工程中，我们必须通过Vue.use() 来安装插件--路由功能
                Vue.use(VueRouter)
            </pre>
        </div>
    </main>
</template>
<script>
export default {
    created() {
        // console.log(JSON.stringify(this.$router.options));
    }
}
</script>
