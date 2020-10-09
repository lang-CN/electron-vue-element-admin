import request from '@/utils/request'

export function fetchServerTypeList() {
  return request({
    url: '/vue-element-admin/server/serverTypeList',
    method: 'get'
  })
}
