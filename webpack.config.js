var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: [
    './index.js'
  ],
  devServer: {
     historyApiFallback: true
 },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.json$/, loader: "json"},
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      } }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
