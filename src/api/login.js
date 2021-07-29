import request from '@/utils/request'

// 登录方法
export function login(username, password, code, uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  }
  return request({
    url: '/login/login',
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/system/user/userInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/login/exit',
    method: 'post'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/login/getSystemParam',
    method: 'get'
  })
}

//获取项目名称
export function getTitle(){
  return request({
    url:'/login/getSystemParam',
    method:'get'
  })
}