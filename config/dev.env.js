'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST: null, // 开发时永远为null,因为请求localhost->会被proxy代理到远程target

  API_URL_ECHART1: '"/static/json/echart1.json"',
  API_URL_ECHART2: '"/static/json/echart2.json"' ,
  API_URL_ECHART3: '"/static/json/echart3.json"' ,
  API_URL_ECHART4: '"/static/json/echart4.json"' ,
  API_URL_ECHART5: '"/static/json/echart5.json"' ,
  API_URL_ECHART6: '"/static/json/echart6.json"' ,
  API_URL_ECHART7: '"/static/json/echart7.json"' ,
  API_URL_ECHART8: '"/static/json/echart8.json"' ,
  API_URL_ECHART9: '"/static/json/echart9.json"' ,
  API_URL_ECHART10: '"/static/json/echart10.json"' ,
  API_URL_ECHART11: '"/static/json/echart11.json"' 
})
