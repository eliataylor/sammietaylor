const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        test: /\.(png|jpe?g|gif|ico)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },
  plugins: [htmlWebpackPlugin,
    new ExtractTextPlugin(
      '[name].css'
      // allChunks: true
    ),
    new CopyWebpackPlugin([
      {from:'./src/fonts/',to:'fonts'} 
    ]),
  ]
};