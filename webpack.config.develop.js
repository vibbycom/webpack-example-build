var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
		main: './src/app.js',
		alt: './src/alt.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      vbUtils: path.resolve(__dirname, 'src/utilities/')
    },
    extensions: ['.js', '.styl']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    library: '[name]-lib',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['react', 'env'] }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      // (the commons chunk name)
    
      filename: "commons.js",
      // (the filename of the commons chunk)
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    compress: true,
    port: 9000,
    index: 'index.html',
    open: true
  },
};

