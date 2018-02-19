const webpack = require('webpack')

module.exports = {
  entry: {
    'highcharts-vue': './src/index.js',
    'highcharts-vue.min': './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'HighchartsVue',
    libraryTarget: 'umd'
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
