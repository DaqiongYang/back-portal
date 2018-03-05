// 开发环境的http代理，请求localhost->代理到远程target，处理跨域js请求问题
// 如：axios.get('/api/data') 实际代理的地址为 http://some-domain.com/api/data

const api = [
  '/json'
]

const option = {
  target: 'http://220.197.198.85:82',
  changeOrigin: true
}

let proxy = {}
api.forEach(item => { proxy[item] = option })

module.exports = proxy
