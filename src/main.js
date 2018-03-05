// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'

// 静态路由
import routes from './router'

// 路由跳转前的勾子函数，可做权限验证、动画、浏览器导航历史记录等
import beforeEachHooks from './router/before-each-hooks'

import App from './App'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import utils from './utils'

import ElementUI from 'element-ui'

import ECharts from 'vue-echarts/components/ECharts'
// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/map'
import 'echarts/map/js/china.js'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/graphic'
import 'echarts/lib/component/geo'

// IE9+支持,全局babel-polyfill(使用babel-preset-env和useBuiltIns)
import 'babel-polyfill'

// 全局css
import '@/assets/scss/index.scss'

// 组件中使用 this.$router 调用
Vue.use(Router)

let router = new Router({
  // 去掉url上的/#/号，需要后台(nginx等)做相应配置：404时配置到/index.html，由vue的前端路由*处理
  mode: 'history',

  // router-link匹配路由时的样式，用于选中时的样式处理
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',

  // 静态路由
  routes: routes,

  // 路由跳转时，返回到顶部
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || { x: 0, y: 0 }
  }
})

// 路由勾子数据
Object.keys(beforeEachHooks).forEach(hook => {
  router.beforeEach(beforeEachHooks[hook])
})

// 设置全局配置，如超时时长、根路径、头部信息等
// https://www.npmjs.com/package/axios
const service = axios.create({
  timeout: 30000,
  baseURL: process.env.API_HOST
  // headers: {'X-Requested-With': 'XMLHttpRequest'}
})

// http request 拦截器
service.interceptors.request.use(config => {
  var token = store.state.token
  if (token) {
    // 每次请求都为http头增加Authorization字段，其内容为 token
    config.headers.Authorization = `token ${token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// http response 响应拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // 异常的全局处理
    if (error.response) {
      switch (error.response.status) {
        case 401:
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          })
          break
        default:
          break
      }
    }
    return Promise.reject(error.response)
  }
)

// 组件中使用 this.$http 调用 axios
Vue.use(VueAxios, service)

// 组件中使用 this.$utils 调用全局方法
Vue.use(utils)

Vue.use(ElementUI)

Vue.component('chart', ECharts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 暂时需要引入store,
  components: { App },
  template: '<App/>'
})
