import windows from './windows'
export default [
  // 默认显示内容,或显示错误(充当嵌套中转路径时)
  {
    path: '',
    component: r => require.ensure([], () => r(require('@/components/Error')), 'data')
  },
  {
    path: 'windows',
    component: r => require.ensure([], () => r(require('@/components/LayoutNested')), 'data'),
    children: windows
  }
]
