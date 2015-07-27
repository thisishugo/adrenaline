/* eslint-disable */

var path = require('path');
var webpack = require('webpack');

module.exports = {
  externals: {
    react: 'react'
  },
  target: 'node',
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'redux-graphql.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?optional[]=runtime&stage=0'
      }
    ]
  }
};