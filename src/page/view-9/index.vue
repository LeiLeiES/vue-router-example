<template>
    <main>
        <p class="title-tip margin-t-0">路由的懒加载，组件异步加载的使用</p>
        <div>&emsp;&emsp;在构建路由component 组件对象时，只有在该路由被访问时才被加载，这样实现组件异步加载的方式。</div>
        <div>&emsp;&emsp;如果在配置路由时就将所需要的组件就加载好，则太耗费网络资源，JavaScript包体积则也很臃肿，影响了页面加载。组件异步的加载则很好的解决了这个问题</div>
        <pre>
            ECMAScript 提供了import异步导入的功能,使用方式：

            <span style="color:#409eff">&emsp;&emsp;import 类似与node.js require 的写法。不同于import是异步加载，而require是同步加载。vue 异步加载组件需要明确指定其文件夹路径：@page/...,否者会报错：at webpackAsyncContext (eval at ./src/router lazy recursive ^.*$</span>
            const routerComponents = (path) => () => import (`@/page/${path}`);

            let router = [
                {
                    path:'/home',
                    component:routerComponents('view-5/get-1.vue')
                },
            ]
        </pre>
    </main>
</template>
