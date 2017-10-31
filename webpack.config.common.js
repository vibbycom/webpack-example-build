var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
		main: './src/app.js',
		alt: './src/alt.js'
  },
  resolve: {
    alias: {
      vbUtils: path.resolve(__dirname, 'src/utilities/'),
      vbStyle: path.resolve(__dirname, 'src/style/')
    },
    extensions: ['.js', '.sss']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    library: '[name]_lib',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.sss$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
        'postcss-loader?parser=sugarss'
      ]
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: { presets: ['react', 'env'] }
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js"
    })
  ]
};

