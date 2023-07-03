const path = require('path');

const webpack = require('webpack');

const CopyWebpackPlugin = require("copy-webpack-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge').merge;
const common = require('./webpack.common.js');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist')
};

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, './public'),
    filename: 'dara.toast.js',
    libraryTarget: 'umd',
  }
  , devServer: {
    // inline: true,
    //mode: 'development',
    host: '0.0.0.0',
    port: 8888,
  },
  plugins: [
    //new BundleAnalyzerPlugin()
    new HtmlWebpackPlugin({
      inject: true,
      template: 'sample/index.html',
      scripts: ['./dara.web.custom.js']
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'custom', to: 'custom' }
      ]
    })
  ]
});