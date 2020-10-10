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

let containerType = Mock.mock({
  'list|2': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name|+1': ["tomcat", "jboss"],
    'orderName|+1': ["01", "02"]
  }]
})

let company = Mock.mock({
  'list|4': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name|+1': ["科工", "重工", "水务", "郑州"],
    'orderName|+1': ["01", "02", "03", "04"]
  }]
})

let appliaction = Mock.mock({
  'list|3': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name|+1': ["oim-hdgc", "app-hdgc", "app-xmgl"],
    'describe|+1': ["工程管理（老平台）", "工程管理（新平台）", "项目管理系统"],
    'ports|+1': [
      [{
        "name": "web",
        "port": "90"
      }],
      [{
        "name": "web",
        "port": "90"
      }, {
        "name": "webserver",
        "port": "1081"
      }]
    ]
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
  },
  {
    url: '/vue-element-admin/server/containerType/list',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          total: containerType.list.length,
          items: containerType.list
        }
      }
    }
  },
  {
    url: '/vue-element-admin/server/company/list',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          total: company.list.length,
          items: company.list
        }
      }
    }
  },
  {
    url: '/vue-element-admin/server/appliaction/list',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          total: appliaction.list.length,
          items: appliaction.list
        }
      }
    }
  },
  {
    url: '/vue-element-admin/server/appliaction/[0-9]',
    type: 'put',
    response: data => {
      let _status = "warning";
      for (const app of appliaction.list) {
        if (app.id === data.body.id) {
          app.name = data.body.name;
          app.describe = data.body.describe;
          app.ports = data.body.ports;
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
    url: '/vue-element-admin/server/appliaction/create',
    type: 'put',
    response: data => {
      let maxId = 0;
      for (const app of appliaction.list) {
        if (app.id > maxId) {
          maxId = app.id;
        }
      }
      let putData = {
        id: maxId + 1,
        name: data.body.name,
        describe: data.body.describe,
        ports: data.body.ports
      }
      appliaction.list.push(putData);

      return {
        code: 20000,
        data: {
          id: putData.id
        }
      }
    }
  }
]