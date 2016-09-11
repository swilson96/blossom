var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');

var config = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude: /node_modules/,
        include: __dirname,
        loader : 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
};

module.exports = config;
