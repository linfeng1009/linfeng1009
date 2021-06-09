import Vue from 'vue'
import VueRouter from 'vue-router'
import Parent from '../views/Parent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Parent',
    component: Parent
  },
  {
    path: '/child',
    name: 'Child',
    component: () => import('../views/Child.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
