import request from '@/utils/request'
// 查询字典数据详细
export function getData(dictCode) {
  return request({
    url: '/system/dict/getDicts' + dictCode,
    method: 'get'
  })
}

