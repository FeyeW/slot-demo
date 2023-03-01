import service from '@/utils/service/index'
import request from '@/utils/service/request/request'

// 查询电缆接头列表
export function listConnector(query) {
  return service.apiRequest.get({
    url: '/system/connector/list',
    method: 'get',
    params: query
  })
}

// 查询电缆接头详细
export function getConnector(id) {
  return service.apiRequest.get({
    url: '/system/connector/' + id,
    method: 'get'
  })
}

// 新增电缆接头
export function addConnector(data) {
  return service.apiRequest.post({
    url: '/system/connector',
    method: 'post',
    data: data
  })
}

// 修改电缆接头
export function updateConnector(data) {
  return service.apiRequest.put({
    url: '/system/connector',
    method: 'put',
    data: data
  })
}

// 删除电缆接头
export function delConnector(id) {
  return service.apiRequest.delete({
    url: '/system/connector/' + id,
    method: 'delete'
  })
}
