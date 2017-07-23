/* eslint-disable global-require */
// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path');

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../../backend/public/index.html'),
    assetsRoot: path.resolve(__dirname, '../../backend/public'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
    cssSourceMap: false,
  },
};
