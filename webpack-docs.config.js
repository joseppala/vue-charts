const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack-common.config');

config.plugins.push(new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src', 'docs', 'index.html'),
  filename: 'index.html',
  chunks: ['main']
}));

module.exports = Object.assign(config, {
  mode: 'production',
  entry: {
    'main': path.resolve(__dirname, 'src', 'docs', 'documentation.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'docs')
  },
});