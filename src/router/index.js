import data from './data'
import windows from './data/windows'
// 此配置，保证底层除components外,不依赖外层,方便模块化开发
export default [
  // 直接使用/,路由到windows
  {
    path: '/',
    component: r => require.ensure([], () => r(require('@/components/LayoutNested')), 'mian'),
    children: windows
  },
  {
    path: '/data',
    component: r => require.ensure([], () => r(require('@/components/LayoutNested')), 'data'),
    children: data
  },
  // 无路由时跳转到error
  {
    path: '*',
    component: r => require.ensure([], () => r(require('@/components/Error')), 'mian')
  }
]
