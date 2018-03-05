'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST: null, // 开发时永远为null,因为请求localhost->会被proxy代理到远程target

  API_URL_ECHART1: '"/json/echart1.json"',
  API_URL_ECHART2: '"/json/echart2.json"' ,
  API_URL_ECHART3: '"/json/echart3.json"' ,
  API_URL_ECHART4: '"/json/echart4.json"' ,
  API_URL_ECHART5: '"/json/echart5.json"' ,
  API_URL_ECHART6: '"/json/echart6.json"' ,
  API_URL_ECHART7: '"/json/echart7.json"' ,
  API_URL_ECHART8: '"/json/echart8.json"' ,
  API_URL_ECHART9: '"/json/echart9.json"' ,
  API_URL_ECHART10: '"/json/echart10.json"' ,
  API_URL_ECHART11: '"/json/echart11.json"' 
})
