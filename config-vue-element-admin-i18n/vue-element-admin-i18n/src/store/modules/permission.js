import { asyncRoutes, constantRoutes } from '@/router'
import { transformAsyncRoutes } from '@/utils/transformAsyncRoutes'
/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

// 假设这里是我接口请求的路由列表
function getRoutes() {
  // 异步请求 0.5秒后给我返回
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve(asyncRoutes)
    }, 500)
  })
}
const actions = {
  generateRoutes({ commit }, roles) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async resolve => {
      // 定义一个变量 存放可以访问的路由表
      let accessedRoutes
      /**
         * @param:{ getRoutes } { Function } @description 这是我这边的调用后端接口返回路由列表的方法
         *
         * 前端实现动态路由需要将asyncRoutes改为从后端进行返回的一个数据 并保持数据格式的对应
         * ！注意 ！：接口请求到的asyncRoutes 为异步操作 需要使用async await改为同步↓
         * return new Promise(async resolve => {
         *  let res = await getRoutes();
         * }
         */
      const asyncRoutes = await getRoutes()
      // 调用transformAsyncRoutes 并把返回的新数组（整理好格式的路由表）赋值给accessedRoutes
      const asyncRoutesRes = transformAsyncRoutes(asyncRoutes)
      /**
       * 如果角色是admin 那么所有的路由表都可以被访问
       * 否则的话进行筛选当前角色可以访问的路由表
       */
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutesRes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutesRes, roles)
      }
      // commit提交给SET_ROUTES方法
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
