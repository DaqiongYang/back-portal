'use strict'
module.exports = {
  NODE_ENV: '"production"',
  /* 跟api接口同源时，设置为null，
   * 不同源时，设置为 '"http://API所在的域名"'
   * 且前端服务器需在responese headers
   * 设置Access-Control-Allow-Origin:* 或 Access-Control-Allow-Origin:http://API所在的域名 
   **/
  API_HOST: null,
  
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
}
