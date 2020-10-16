import request from '@/utils/request'

export function createServer(data) {
  return request({
    url: '/vue-element-admin/server/createServer',
    method: 'post',
    data
  })
}

export function findByName(name) {
  return request({
    url: `/vue-element-admin/server/findByName/${name}`,
    method: 'get',
  })
}

export function fetchServerAll() {
  return request({
    url: '/vue-element-admin/server/findAll',
    method: 'get',
  })
}

export function updateServer(id, data) {
  return request({
    url: `/vue-element-admin/server/updateServer/${id}`,
    method: 'post',
    data
  })
}

export function deleteServerById(id) {
  return request({
    url: `/vue-element-admin/server/deleteById/${id}`,
    method: 'get',
  })
}