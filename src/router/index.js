import Vue from 'vue'
import Router from 'vue-router'
import system from'./system.js'
Vue.use(Router)

/* Layout */
import Layout from '@/layout'
// import ParentView from '@/components/ParentView';
let children=[].concat(system)
// 公共路由
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: (resolve) => require(['@/views/redirect'], resolve)
      }
    ]
  },
  {
    path: '/login',
    component: (resolve) => require(['@/views/login'], resolve),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    name:'index',
    redirect: 'index',
    children:children
  },
  {
    path: '/404',
    component: (resolve) => require(['@/views/error/404'], resolve),
  },
  {
    path: '/401',
    component: (resolve) => require(['@/views/error/401'], resolve),
  }
]

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
