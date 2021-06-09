import Layout from '@/layout'
export function transformAsyncRoutes(item) {
  const routes = []
  for (const route of item) {
    const obj = {
      path: route.path,
      name: route.name,
      hidden: route.hidden ? route.hidden : false,
      meta: route.meta,
      // 如果根目录component为#  导入的则是 Layout
      component: route.component === '#' ? Layout : loadView(route.path)
    }
    // 如果存在redirect这个参数 就赋值 否则什么也不干
    route.redirect ? obj.redirect = route.redirect : null
    route.children ? obj['children'] = transformAsyncRoutes(route.children) : null
    routes.push(obj)
  }
  return routes
}
// 引入文件
const loadView = (view) => {
  // 这里使用import会报错 要改为require
  return (res) => require([`@/views${view}`], res)
}
