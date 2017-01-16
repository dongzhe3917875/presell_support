// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    // index 一定是本地文件系统的一个绝对地址 如果是服务端 根据服务端的位置来找到对应的位置
    index: path.resolve(__dirname, '../dist/index.html'),
    // 必须是绝对地址 如果是服务端 指定到存放静态文件的位置 （webpack打包后的静态文件位置））
    assetsRoot: path.resolve(__dirname, '../dist'),
    // assetsRoot + assetsSubDirectory 打包文件位置
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 3030,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/dongzhe': {
          target: 'http://45.62.108.67',
          changeOrigin: true
      },
      '/image': {
          target: 'http://45.62.108.67',
          changeOrigin: true
      },
      '/api': {
        target: 'http://preseller.gsteps.cn',
        changeOrigin: true
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
