var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module : {
    loaders : [
      {
        test : /\.jsx$/,
        exclude: 'node_modules',
        include: APP_DIR,
        loader : 'babel'
      },
      {
        test : /\.js$/,
        exclude: /node_modules/,
        include: __dirname,
        loader : 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};

module.exports = config;
