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

export function fetchSystemTypeList() {
  return request({
    url: '/vue-element-admin/server/systemType/list',
    method: 'get'
  })
}

export function fetchContainerTypeList() {
  return request({
    url: '/vue-element-admin/server/containerType/list',
    method: 'get'
  })
}

export function fetchCompanyTypeList() {
  return request({
    url: '/vue-element-admin/server/company/list',
    method: 'get'
  })
}

export function fetchAppliactionList() {
  return request({
    url: '/vue-element-admin/server/appliaction/list',
    method: 'get'
  })
}

export function updateAppliaction(id, data) {
  return request({
    url: `/vue-element-admin/server/appliaction/${id}`,
    method: 'put',
    data
  })
}

export function createAppliaction(data) {
  return request({
    url: '/vue-element-admin/server/appliaction/create',
    method: 'put',
    data
  })
}