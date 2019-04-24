const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    'highcharts-vue': './src/index.js',
    'highcharts-vue.min': './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'HighchartsVue',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist')
  },
  externals: {
    highcharts: {
      root: 'Highcharts',
      commonjs: 'highcharts',
      commonjs2: 'highcharts',
      amd: 'highcharts'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
}
