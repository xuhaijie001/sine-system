import request from '@/utils/request'

// 全局参数设置列表
export function getSetList(pageNum,pageSize) {
  return request({
    url: '/system/param/getGlobalParam',
    data:{
      pageNum,
      pageSize
    },
    method: 'post',
  })
}

// 修改参数详情
export function getRole(roleId) {
  return request({
    url: '/system/role/' + roleId,
    method: 'get'
  })
}









