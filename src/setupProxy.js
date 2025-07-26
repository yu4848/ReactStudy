// const proxy = require('http-proxy-middleware')

// module.exports=function(app){
//     app.use(
//         proxy('/api',{
//             target:'http://localhost:5000',
//             changeOrigin:true,
//             pathRewrite:{'^/api':''}
//         })
//     )
// }
//[上方一直打不开页面，并无报错。。。改成下方代码，页面就能显示了] P66里，我的react脚手架是没有http-proxy-middleware的，所以需要自己安装。
// 然后我安装的会是最新版的，那么我得这么写：
const {createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
app.use(
createProxyMiddleware ('/api1', {
target: 'http://localhost:5000',
changeOrigin: true,
pathRewrite: {'^/api1': ''}
})
)
};