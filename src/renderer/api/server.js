import request from '@/utils/request'

export function fetchServerTypeList() {
  return request({
    url: '/vue-element-admin/server/serverType/list',
    method: 'get'
  })
}

export function updateServerType(id, data) {
  return request({
    url: `/vue-element-admin/server/serverType/${id}`,
    method: 'put',
    data
  })
}

export function createServerType(data) {
  return request({
    url: '/vue-element-admin/server/serverType/create',
    method: 'put',
    data
  })
}

