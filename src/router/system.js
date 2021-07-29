//下面为基础平台路由
export default [
  {
    path: 'index',
    component: (resolve) => require(['@/views/index_v1'], resolve),
    name: '首页',
    meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
  },
  {
    path: '/system/organ',
    component: (resolve) => require(['@/views/system/base/organ/list'], resolve),
    name: '机构管理',
    meta: { title: '机构管理', noCache: true, affix: true }
  },
  {
    path: '/system/role',
    component: (resolve) => require(['@/views/system/base/role/list'], resolve),
    name: '角色管理',
    meta: { title: '角色管理', noCache: true, affix: true }
  },
  {
    path: '/system/user',
    component: (resolve) => require(['@/views/system/base/user/list'], resolve),
    name: '用户管理',
    meta: { title: '用户管理', noCache: true, affix: true }
  },
  {
    path: '/system/password',
    component: (resolve) => require(['@/views/system/base/password/index'], resolve),
    name: '修改密码',
    meta: { title: '修改密码', noCache: true, affix: true }
  },
  {
    path: '/system/notice',
    component: (resolve) => require(['@/views/system/notice/notice/list'], resolve),
    name: '公告管理',
    meta: { title: '公告管理', noCache: true, affix: true }
  },
  {
    path: '/system/newNotice',
    component: (resolve) => require(['@/views/system/notice/newNotice/list'], resolve),
    name: '最新公告',
    meta: { title: '最新公告', noCache: true, affix: true }
  },
  {
    path: '/system/paramSetting',
    component: (resolve) => require(['@/views/system/set/paramSetting/list'], resolve),
    name: '全局参数配置',
    meta: { title: '全局参数配置', noCache: true, affix: true }
  },
  {
    path: '/system/log',
    component: (resolve) => require(['@/views/system/log/logIn/list'], resolve),
    name: '登录日志',
    meta: { title: '登录日志', noCache: true, affix: true }
  },
  {
    path: '/system/operationLog',
    component: (resolve) => require(['@/views/system/log/operationLog/list'], resolve),
    name: '操作日志',
    meta: { title: '操作日志', noCache: true, affix: true }
  },
  {
    path: '/system/task',
    component: (resolve) => require(['@/views/system/task/task/list'], resolve),
    name: '任务管理',
    meta: { title: '任务管理', noCache: true, affix: true }
  },
  {
    path: '/system/taskLog',
    component: (resolve) => require(['@/views/system/task/taskLog/list'], resolve),
    name: '任务日志',
    meta: { title: '任务日志', noCache: true, affix: true }
  },
];