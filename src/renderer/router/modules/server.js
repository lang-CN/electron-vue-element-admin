/** 服务器 路由 **/

import Layout from '@/layout'

const serverRouter = {
    path: '/server',
    component: Layout,
    redirect: '/server/index',
    name: 'Server',
    meta: {
        title: '服务',
        icon: 'nested'
    },
    children: [{
            path: 'index',
            name: 'Server-index',
            component: () => import('@/views/server/index'),
            meta: {
                title: '服务器列表'
            }
        }
    ]
}
export default serverRouter