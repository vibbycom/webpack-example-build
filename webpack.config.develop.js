var path = require('path');

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
    extensions: ['.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    library: '[name]-lib',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: path.join(__dirname),
    publicPath: '/static/',
    compress: true,
    port: 9000,
    index: 'index.html',
    open: true,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};

