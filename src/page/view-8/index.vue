<template>
    <main>
        <div>
            <p class="title-tip margin-t-0">1、导航守卫是什么？</p>
            <div>&emsp;&emsp;导航守卫即表示当路由发生改变，我们如何处理路由间的页面跳转，以及对页面跳转间的处理。vue-router 提供导航守卫来实现我们是否允许路由进行切换的功能。</div>
        </div>

        <div>
            <p class="title-tip">1、全局守卫的注册</p>
            <pre>
                通过router.beforeEach 来注册一个全局守卫。使用：在实例化路由对象后，添加全局导航守卫，本实例示例：
                <code>
                //实例化vue-router实例
                const vueRouter = new Router({
                    mode:'history',
                    routes
                });
                //注册全局守卫
                vueRouter.beforeEach((to,from,next) => {
                    //to
                    //from
                    //next
                });
                </code>
                如上代码即定义了路由全局守卫，每个守卫接收三个参数：
                1、to：表示即将要进入的目标路由对象
                2、from：表示当前即将离开的路由对象
                3、next：<strong>该对象是一个Function,一定需要调用该钩子来确定是否允许路由的下一步操作。</strong>
                &emsp;&emsp;next()：进入。表如允许该路由的切换
                &emsp;&emsp;next(false):中断导航，不执行路由切换--页面跳转
                &emsp;&emsp;next('/home')：是路由跳转到自定的地址，而不是 to 里边的路由的对象
            </pre>
        </div>

        <div>
            <p class="title-tip">3、注册全局后置路由钩子</p>
            <pre>
                全局后置路由钩子和守卫不同，后置钩子是路由已经发生切换跳转后触发的钩子，因此没有next 函数。

                /**
                * 全局后置导航守卫
                * to:进入后的目标路由地址
                * from：当前离开的路由地址
                */
                vueRouter.afterEach((to,from) => {
                })
            </pre>
        </div>

        <div>
            <p class="title-tip">4、定义路由守卫</p>
            <div>路由守卫即是在我们定义路由的时候，添加守卫导航--beforeEach</div>
            <pre>
                <code>
                    {
                        path:'/view-8',
                        component:routerComponents('view-8/index.vue'),
                        beforeEach:(to,from,next =>{
                            //...
                        })
                    }
                </code>
            </pre>
        </div>

        <div>
            <p class="title-tip">5、组件内使用守卫</p>
            &emsp;&emsp;<strong>最后我们了解在组件内使用导航守卫，当然我们也推荐守卫是定义在组件内的，当然组件守卫只是针对在这一个组件中生效。或者我们可以定义全局守卫。</strong>
            <pre>
                <code>
                    export default {
                        data() {
                            return{

                            }
                        },

                        //1、在渲染该组件的对应路由被 confirm 前调用
                        //2、 不！能！获取组件实例 `this`
                        beforeRouteEnter(to,from,next) {}

                        //1、在当前路由改变，但是该组件被复用时调用
                        //2、可以访问组件实例 `this`
                        beforeRouteUpdate(to,from,next) {}

                        //1、导航离开该组件的对应路由时调用
                        //2、可以访问组件实例 `this`
                        beforeRouteLeave(to,from,next) {}
                    }
                </code>
            </pre>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return{
        }
    },
    created(){
        console.log(this.$route);
    }
}
</script>
