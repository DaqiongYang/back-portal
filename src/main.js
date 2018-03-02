// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueAxios from 'vue-axios'
import axios from './api/axios'

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

// 组件中使用 this.$http 调用 axios
Vue.use(VueAxios, axios)

// 组件中使用 this.$utils 调用全局方法
Vue.use(utils)

Vue.use(ElementUI)

Vue.component('chart', ECharts)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
