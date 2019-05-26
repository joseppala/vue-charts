const path = require('path');
var glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = require('./webpack-common.config');

config.plugins.push(new CleanWebpackPlugin());

module.exports = Object.assign(config, {
  mode: 'development',
  entry: glob.sync('./src/lib/**.vue').reduce((o, file) => {
    o[path.parse(file).name] = file;
    return o;
  }, {}),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
});