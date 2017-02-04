var webpack = require('webpack');
var path = require('path');

var config = {
  entry: './src/components/index.jsx',
  output: {
    path:  './build/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        loader : 'babel-loader',
        exclude: /node_modules/,
       
      }
   ] 
  },
};

module.exports = config;