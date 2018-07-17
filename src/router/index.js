//Import Require Vue-Router File JS
import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/router-install'

//安装vue-router
Vue.use(Router);

//实例化vue-router实例
const vueRouter = new Router({
  base:'/vue-router/',
  mode:'history',
  routes
});


/**
 * 注册全局导航守护
 * to:即将要进入的目标路由对象
 * from:当前即将离开路由对象
 */
vueRouter.beforeEach((to,from,next) => {
  next();
});

/**
 * 全局后置导航守卫
 * to:进入后的目标路由地址
 * from：当前离开的路由地址
 */
vueRouter.afterEach((to,from) => {
  console.log('进入后的目标路由地址：'+to.path);
  console.log('当前离开的路由地址：'+from.path);
})



export default vueRouter;