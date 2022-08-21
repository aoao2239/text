import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [


  {
    //默认/页面为登录界面 后期改
    path: '/',
    name: 'home',
    //路由懒加载
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'tohome',
    //路由懒加载
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },


  {
    path: '/login',
    name: 'login',
    //路由懒加载
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },

  {
    path: '/register',
    name: 'register',
    //路由懒加载
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
  },
  {
    path: '/resetPsw',
    name: 'resetPsw',
    //路由懒加载
    component: () => import(/* webpackChunkName: "ResetPsw" */ '../views/ResetPswView.vue')

  },
  {
    path: '/resetPsw2',
    name: 'resetPsw2',
    //路由懒加载
    component: () => import(/* webpackChunkName: "ResetPsw2" */ '../views/ResetPsw2View.vue')
  },
  {
    path: '/userMsg',
    name: 'uerMsg',
    //路由懒加载
    component: () => import(/* webpackChunkName: "UserMsg" */ '../views/UserMsgView.vue')

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
