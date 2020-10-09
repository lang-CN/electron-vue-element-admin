import Mock from 'mockjs'

let serverType = Mock.mock({
  'list|2': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name|+1': ["正式", "测试"],
    'orderName|+1': ["01", "02"]
  }]
})

export default [{
  url: '/vue-element-admin/server/serverTypeList',
  type: 'get',
  response: () => {
    return {
      code: 20000,
      data: {
        total: serverType.list.length,
        items: serverType.list
      }
    }
  }
}]