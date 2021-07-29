import request from '@/utils/request'
const baseURL = process.env.VUE_APP_BASE_API
// 任务管理列表
export function getTaskList(pageNum,pageSize,query) {
  return request({
    url: '/system/task/list',
    method: 'post',
    data:{
      pageNum,
      pageSize
    },
  })
}
//导出登录日志
export  function logExports(){
  window.location.href = baseURL+'/system/systemLog/exportSystemLogExcel';
}



/**
 * 任务日志接口
 * @param {*} pageNum 
 * @param {*} pageSize 
 */
// 任务日志列表
export function gettaskLogList(pageNum,pageSize) {
  return request({
    url: '/system/task/logs',
    data:{
      pageSize,
      pageNum
    },
    method: 'post'
  })
}

//删除任务日志接口
export  function deleteTaskLog(logId){
  console.log(logId)
  return request({
    url: '/system/task/removeLogs',
    data:{
      logId
    },
    method: 'post'
  })
}
//任务日志查看接口
export  function checkTaskLog(logId){
  return request({
    url: '/system/task/log',
    data:{
      logId
    },
    method: 'post'
  })
}
