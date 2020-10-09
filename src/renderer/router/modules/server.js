/** 服务器 路由 **/

import Layout from '@/layout'

const serverRouter = {
    path: '/server',
    component: Layout,
    redirect: '/server/server-list',
    name: 'Server',
    meta: {
        title: '服务器',
        icon: 'list'
    },
    children: [{
            path: 'server-list',
            component: () => import('@/views/server/server-list'),
            name: 'ServerList',
            meta: {
                title: '服务列表'
            }
        }
    ]
}
export default serverRouter