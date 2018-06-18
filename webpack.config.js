const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./webpackconfig/helpers')
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // css loader and inject into components
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      },
      // // css global which not include in components
      {
        test: /\.css$/,
        exclude: path.join(__dirname, '/src/app'),
        use: ExtractTextPlugin.extract({
          use: 'raw-loader'
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=images/[name].[hash].[ext]'
      },
    ]
  },
  plugins: [htmlWebpackPlugin,
    new ExtractTextPlugin(
      '[name].css'
      // allChunks: true
    ),]
};