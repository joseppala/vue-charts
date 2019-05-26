const config = require('./webpack-common.config');
const path = require('path');

module.exports = Object.assign(config, {
  mode: 'development',
  entry: {
    'main': path.resolve(__dirname, 'src', 'examples.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
});