/** 服务器 路由 **/

import Layout from '@/layout'

const regularCheckRouter = {
    path: '/regularcheck',
    component: Layout,
    redirect: '/regularcheck/diskspace',
    name: 'Regularcheck',
    meta: {
        title: '定期检查',
        icon: 'form'
    },
    children: [{
            path: 'diskspace',
            name: 'Regularcheck-diskspace',
            component: () => import('@/views/regularcheck/diskspace/index'),
            meta: {
                title: '磁盘空间'
            }
        },
    ]
}
export default regularCheckRouter