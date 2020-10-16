import Mock from 'mockjs'


let server = Mock.mock({
  'list|20': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name|+1': ["项目管理", "工程管理", "支付一体化"],
    'customer|+1': ["科工", "重工", "水务"],
    'ip|+1': ["192.168.1.2", "192.168.1.3", "192.168.1.4"],
    'port|+1': ["8022", "8023"],
  }]
})

export default [
  //系统
  {
    url: '/vue-element-admin/server/findAll',
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
    url: '/vue-element-admin/server/updateServer/[0-9]',
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
    url: '/vue-element-admin/server/createServer',
    type: 'post',
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