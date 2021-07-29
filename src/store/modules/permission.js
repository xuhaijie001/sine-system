import { constantRoutes } from '@/router'
import { getRouters } from '@/api/menu'
import Layout from '@/layout/index'
import ParentView from '@/components/ParentView';
import router from '../../router';

const permission = {
  state: {
    routes: [],
    addRoutes: [],
    defaultRoutes: [],
    topbarRouters: [],
    sidebarRouters:[],
    allRouteList:[]
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    },
    SET_DEFAULT_ROUTES: (state, routes) => {
      state.defaultRoutes = constantRoutes.concat(routes)
    },
    SET_TOPBAR_ROUTES: (state, routes) => {
      // 顶部导航菜单默认添加统计报表栏指向首页
      
      state.topbarRouters = routes;//.concat(index);
    },
    SET_SIDEBAR_ROUTERS: (state, key=0) => {
      key=Number(key.key)
      let leftSideBar = state.allRouteList[key]
      state.sidebarRouters = leftSideBar
    },
    SET_ALLROUTE_LIST:(state,routes) => {
      state.allRouteList = routes
    }

  },
  actions: {
    LeftSideBar(context,key){
      context.commit('SET_SIDEBAR_ROUTERS',key)
    },
    // 生成路由
    GenerateRoutes({ commit }) {
      return new Promise(resolve => {
        // 向后端请求路由数据
        getRouters().then(res => {
          const sdata = JSON.parse(res.result)
          const rdata = JSON.parse(res.result)
          const topbarRouter = filterAsyncRouter(rdata)
          const secondRouter = secondAsyncRouter(rdata)
         // secondRouter.push({ path: '*', redirect: '/404', hidden: true })
          //commit('SET_ROUTES', rewriteRoutes)
          commit('SET_ALLROUTE_LIST',secondRouter)
          commit('SET_TOPBAR_ROUTES', topbarRouter)
          resolve(true)
        })
      })
    }
  }
}

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap) {
  let navTopArr=[];
  if(asyncRouterMap){
    for(var i=0;i<asyncRouterMap.length;i++){
       let firstobj={};
       firstobj.name=asyncRouterMap[i].text;
       firstobj.icon=asyncRouterMap[i].iconkey;
       firstobj.id=asyncRouterMap[i].id;
       navTopArr.push(firstobj)
    }
    return navTopArr;
  }
}
function secondAsyncRouter(asyncRouterMap) {
  let sidebar=[];
  if(asyncRouterMap){
    for(var i=0;i<asyncRouterMap.length;i++){
       
      sidebar.push(asyncRouterMap[i].menu)
    }
    return sidebar;
  }
}
// export const loadView = (view) => { // 路由懒加载
//   return (resolve) => require([`@/views/${view}`], resolve)
// }
export default permission
