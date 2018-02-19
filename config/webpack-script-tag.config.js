var config = require('./webpack.common.config')
const path = require('path')

module.exports = Object.assign({}, config, {
  output: Object.assign({}, config.output, {
    path: path.resolve(__dirname, '../dist/script-tag')
  }),
  externals: {
    highcharts: 'Highcharts'
  }
})
