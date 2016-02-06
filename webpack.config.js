const path = require('path');
const webpack = require('webpack');

const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './source')
]


module.exports = {
  entry: './source/scripts/main.js',
  output: { path: __dirname + '/build/', filename: 'bundle.js' },
  module: {
    preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['eslint'],
          include: [ path.resolve(__dirname, "source")]
        }
      ],
    loaders: [,
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      // { 
      //   test: /\.(png|jpg)$/, 
      //   loader: 'file?limit=8192'
      // },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
          include: [ path.resolve(__dirname, "source")],
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({ 
      filename: 'index.html',
      template: 'source/index.html'
    })
  ],
  devtool: 'source-map'
};