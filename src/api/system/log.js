import request from '@/utils/request'
const baseURL = process.env.VUE_APP_BASE_API
// 登录日志列表
export function getLogoInList(pageNum,pageSize,query) {
  return request({
    url: '/system/systemLog/querySystemLogList',
    method: 'post',
    data:{
      pageNum,
      pageSize
    },
    params: query
  })
}
//导出登录日志
export  function logExports(){
  window.location.href = baseURL+'/system/systemLog/exportSystemLogExcel';
}

// 操作日志列表
export function getOperationList(pageNum,pageSize) {
  return request({
    url: '/system/operateLog/queryOperateLogList',
    data:{
      pageSize,
      pageNum
    },
    method: 'post'
  })
}

//导出操作日志
export  function operationExports(){
  window.location.href = baseURL+'/system/operateLog/exportOperateLogExcel';
}
