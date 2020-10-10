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
  'list|20': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name|+1': ["oim-hdgc", "app-hdgc", "app-xmgl", "oracle"],
    'container|+1': [{
      "server": {
        "ip": "192.168.1.2",
        "domain": "em.chec.com.cn"
      },
      "type": {
        "name": "tomcat"
      }
    }, {
      "server": {
        "ip": "192.168.1.3",
        "domain": "dd.chec.com.cn"
      },
      "type": {
        "name": "tomcat"
      }
    }, {
      "server": {
        "ip": "192.168.1.4",
        "domain": "bb.chec.com.cn"
      },
      "type": {
        "name": "tomcat"
      }
    }, {
      "server": {
        "ip": "192.168.1.5",
        "domain": ""
      },
      "type": {
        "name": "dataServer"
      }
    }],
    'describe|+1': ["", "A区", "B区", ""],
    'appUsers|+1': [
      [{
        "name": "administrator",
        "password": "APPHDGC_2001"
      }, {
        "name": "admin",
        "password": "APPHDGC_1002"
      }],
      [{
        "name": "root",
        "password": "APPHDGC_2001"
      }],
      [{
        "name": "root",
        "password": "APPHDGC_2001"
      }],
      [{
        "name": "admin",
        "password": "AABBCC"
      }, {
        "name": "root",
        "password": "AABBCC"
      }]
    ],
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
      }],
      [{
        "name": "web",
        "port": "90"
      }, {
        "name": "webserver",
        "port": "1081"
      }],
      [{
        "name": "net",
        "port": "1521"
      }, {
        "name": "net",
        "port": "1520"
      }]
    ]
  }]
})

let container = Mock.mock({
  'list|8': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'server|+1': [{
      "name": "项目管理",
      "ip": "192.168.1.2"
    }, {
      "name": "工程管理",
      "ip": "192.168.1.3"
    }, {
      "name": "支付一体化",
      "ip": "192.168.1.5"
    }],
    'type|+1': [{
      "name": "tomcat"
    }, {
      "name": "jboss"
    }, {
      "name": "nginx"
    }, {
      "name": "dataServer"
    }],
    'addr|+1': ["D:/a/b/c", "/user/nim-cfg"]
  }]
})

let server = Mock.mock({
  'list|5': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name|+1': ["项目管理", "工程管理", "支付一体化"],
    'ip|+1': ["192.168.1.2", "192.168.1.3", "192.168.1.4"],
    'domain|+1': ["em.chec.com.cn", "dd.chec.com.cn", "ss.chec.com.cn"],
    'company|+1': [{
      "name": "科工"
    }, {
      "name": "重工"
    }, {
      "name": "郑州"
    }],
    'type|+1': [{
      "name": "正式"
    }, {
      "name": "正式"
    }, {
      "name": "测试"
    }],
    'system|+1': [{
      "name": "win",
      "developer": "win",
      "version": "2016"
    }, {
      "name": "Linux",
      "developer": "RedHead",
      "version": "16.4"
    }, {
      "name": "Linux",
      "developer": "Centos",
      "version": "7.02"
    }],
    'systemUser|+1': [
      [{
        "name": "administrator",
        "password": "APPHDGC_2001"
      }, {
        "name": "admin",
        "password": "APPHDGC_1002"
      }],
      [{
        "name": "administrator",
        "password": "APPHDGC_2001"
      }],
      [{
        "name": "administrator",
        "password": "APPHDGC_2001"
      }],
      [{
        "name": "apphdgc",
        "password": "ORACLEPWD"
      }, {
        "name": "appxmgl",
        "password": "ORACLEPWD"
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

  //应用
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
  },

  //容器
  {
    url: '/vue-element-admin/server/container/list',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          total: container.list.length,
          items: container.list
        }
      }
    }
  },
  {
    url: '/vue-element-admin/server/container/[0-9]',
    type: 'put',
    response: data => {
      let _status = "warning";
      for (const _data of container.list) {
        if (_data.id === data.body.id) {
          _data.name = data.body.name;
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
    url: '/vue-element-admin/server/container/create',
    type: 'put',
    response: data => {
      let maxId = 0;
      for (const _data of container.list) {
        if (_data.id > maxId) {
          maxId = _data.id;
        }
      }
      let putData = {
        id: maxId + 1,
        name: data.body.name,
      }
      container.list.push(putData);

      return {
        code: 20000,
        data: {
          id: putData.id
        }
      }
    }
  },

  //系统
  {
    url: '/vue-element-admin/server/server/list',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          total: server.list.length,
          items: server.list
        }
      }
    }
  },
  {
    url: '/vue-element-admin/server/server/[0-9]',
    type: 'put',
    response: data => {
      let _status = "warning";
      for (const _data of server.list) {
        if (_data.id === data.body.id) {
          _data.name = data.body.name;
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
    url: '/vue-element-admin/server/server/create',
    type: 'put',
    response: data => {
      let maxId = 0;
      for (const _data of server.list) {
        if (_data.id > maxId) {
          maxId = _data.id;
        }
      }
      let putData = {
        id: maxId + 1,
        name: data.body.name,
      }
      server.list.push(putData);

      return {
        code: 20000,
        data: {
          id: putData.id
        }
      }
    }
  }
]