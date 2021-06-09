import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Incriment from '../views/incriment.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Home.vue'),
    children: [
      {
        path: '',
        redirect: {
          name: 'Add'
        }
      },
      {
        path: '/add',
        name: 'Add',
        component: () => import('../components/Add.vue')
      },
      {
        path: '/delete',
        name: 'Delete',
        component: () => import('../components/Delete.vue')
      },
      {
        path: '/done',
        name: 'Done',
        component: () => import('../components/Done.vue')
      }
    ]
  },
  {
    path: '/incriment',
    name: 'Incriment',
    component: () => import('../views/incriment.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 添加了这个 当前页面在哪个路由 那么router-link的标签就会加上这样一个类
  linkActiveClass: 'active'
})

export default router
