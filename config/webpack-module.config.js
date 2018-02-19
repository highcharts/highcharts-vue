var config = require('./webpack.common.config')
const path = require('path')

module.exports = Object.assign({}, config, {
  output: Object.assign({}, config.output, {
    path: path.resolve(__dirname, '../dist/module')
  }),
  externals: {
    highcharts: 'highcharts'
  }
})
