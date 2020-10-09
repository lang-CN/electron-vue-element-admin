import Mock from 'mockjs'

let serverType = Mock.mock({
  'list|2': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name|+1': ["正式", "测试"],
    'orderName|+1': ["01", "02"]
  }]
})

let systemType = Mock.mock({
  'list|8': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name|+1': ["win", "linux"],
    'developer|+1': ["win", "redhat", "centos", "ubuntu"],
    'version|+1': ["2016", "14.1.1", "14.1.2", "14.1.2"],
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
    url: '/vue-element-admin/server/serverType/[0-9]',
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
  },
  {
    url: '/vue-element-admin/server/serverType/create',
    type: 'put',
    response: data => {
      let maxId = 0;
      for (const serverType of serverType.list) {
        if (serverType.id > maxId) {
          maxId = serverType.id;
        }
      }
      let putData = {
        id: maxId + 1,
        name: data.body.name,
        orderName: data.body.orderName
      }
      serverType.list.push(putData);

      return {
        code: 20000,
        data: {
          id: putData.id
        }
      }
    }
  },
  {
    url: '/vue-element-admin/server/systemType/list',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          total: systemType.list.length,
          items: systemType.list
        }
      }
    }
  }
]