// const proxy = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(proxy('/api', { 
//     target: 'https://www.baidu.com',
//     changeOrigin: true,
//     pathRewrite: {
//       '^/api': ''
//     }
//   }));

  

    
  const proxy = require('http-proxy-middleware')

  module.exports = function(app) {
    // /api 表示代理路径
    // target 表示目标服务器的地址
  //   app.use(
  //     proxy('/api', {
  //       target: 'https://shopapi.smartisan.com',
  //       // 跨域时一般都设置该值 为 true
  //       changeOrigin: true,
  //       // 重写接口路由
  //       pathRewrite: {
  //         '^/api': '/mobile' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
  //       }
  //     })
  //   )
  
    app.use(
      proxy('/api', {
        target: 'https://shopapi.smartisan.com',
        // 跨域时一般都设置该值 为 true
        changeOrigin: true,
        // 重写接口路由
        pathRewrite: {
          '^/api': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
        }
      })
    )
  
  }