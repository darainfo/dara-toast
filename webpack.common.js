const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'dara.toast.js',
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      src: path.resolve(__dirname, 'src/'),
      //moment: 'moment/src/moment'
      '@t': path.resolve(__dirname, 'src/types'),
    },
  },
  optimization: {
    providedExports: true
    , usedExports: true

  },
  module: {
    rules: [
      {
        test: /\.ts$|\.tsx$/u,
        exclude: /node_modules/u,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.js|\.jsx$$/u,
        exclude: /node_modules/u,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/u,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'dist/[name].css'
    })

  ],
};
