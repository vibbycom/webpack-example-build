var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var commonConfig = require('./webpack.config.common')
var merge = require('webpack-merge')

module.exports = merge(
  commonConfig, {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        }
      })
    ],
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      publicPath: '/',
      compress: true,
      port: 9000,
      index: 'index.html',
      open: true
    },
  }
)
