const path = require('path')
// const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public', // 加在引用 js前
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /.(js|jsx)$/,
      loader: 'eslint-loader',
      exclude: [
        path.resolve(__dirname, '../node_modules')
      ]
    }, {
      test: /.jsx$/,
      loader: 'babel-loader'
    }, {
      test: /.js$/,
      loader: 'babel-loader',
      exclude: [
        path.join(__dirname, '../node_modules')
      ]
    }]
  },
  // plugins: [
  //   new HTMLPlugin()
  // ]
}