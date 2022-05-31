/**
 * 筛选路由的函数
 * @param routes 
 * @returns 筛选出的函数组成的数组 
 */
export default function filterRoutesFunc(routes){
  let res = []
  routes.forEach(route => {
    if(route.children){
      res = res.concat(filterRoutesFunc(route.children))
    } else {
      if(route.hidden !== true){
        res.push(route)
      }
    }
  })
  return res
}