import request from '@/utils/request'

/**
 *  字典项
 */
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


/**
 *  应用
 */
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

/**
 *  容器
 */
export function fetchContainerList() {
  return request({
    url: '/vue-element-admin/server/container/list',
    method: 'get'
  })
}

export function updateContainer(id, data) {
  return request({
    url: `/vue-element-admin/server/container/${id}`,
    method: 'put',
    data
  })
}

export function createContainer(data) {
  return request({
    url: '/vue-element-admin/server/container/create',
    method: 'put',
    data
  })
}

/**
 *  服务器
 */
export function fetchServerList() {
  return request({
    url: '/vue-element-admin/server/server/list',
    method: 'get'
  })
}

export function updateServer(id, data) {
  return request({
    url: `/vue-element-admin/server/server/${id}`,
    method: 'put',
    data
  })
}

export function createServer(data) {
  return request({
    url: '/vue-element-admin/server/server/create',
    method: 'put',
    data
  })
}
 