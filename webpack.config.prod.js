var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var commonConfig = require('./webpack.config.common')
var merge = require('webpack-merge')

module.exports = merge(
  commonConfig, {
    output: {
      filename: '[name]-[chunkhash].bundle.js'
    },
    plugins: [
      new UglifyJSPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    ],
  }
)
