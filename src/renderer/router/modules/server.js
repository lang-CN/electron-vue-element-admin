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
                title: '服务列表'
            }
        },{
            path: 'appliaction',
            name: 'Server-appliaction',
            component: () => import('@/views/server/appliaction/index'),
            meta: {
                title: '应用列表'
            }
        },{
            path: 'container',
            name: 'Server-container',
            component: () => import('@/views/server/container'),
            meta: {
                title: '容器列表'
            }
        },
        {
            path: 'dictionary',
            component: () => import('@/views/server/dictionary/index'), // Parent router-view
            name: 'Server-dic',
            meta: {
                title: '字典项'
            },
            redirect: '/server/dictionary/systemType',
            children: [{
                path: 'company',
                component: () => import('@/views/server/dictionary/company'),
                name: 'Company',
                meta: {
                    title: '客户'
                }
            },{
                path: 'systemType',
                component: () => import('@/views/server/dictionary/systemType'),
                name: 'SystemType',
                meta: {
                    title: '系统类型'
                }
            }, {
                path: 'containerType',
                component: () => import('@/views/server/dictionary/containerType'),
                name: 'containerType',
                meta: {
                    title: '容器类型'
                }
            }, {
                path: 'serverType',
                component: () => import('@/views/server/dictionary/serverType'),
                name: 'serverType',
                meta: {
                    title: '服务器类型'
                }
            }]
        }
    ]
}
export default serverRouter