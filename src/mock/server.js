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
    url: '/vue-element-admin/server/serverType/list',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          total: serverType.list.length,
          items: serverType.list
        }
      }
    }
  },
  {
    url: '/vue-element-admin/server/serverType/[A-Za-z0-9]',
    type: 'put',
    response: data => {
      let _status = "warning";
      for (const serverType of serverType.list) {
        if (serverType.id === data.body.id) {
          serverType.name = data.body.name;
          _status = "success";
        }
      }
      return {
        code: 20000,
        data: {
          status: _status
        }
      }
    }
  }
]