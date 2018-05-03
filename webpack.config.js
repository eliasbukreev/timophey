const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
  	app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
  	contentBase: './dist',
  	hot: true
  },
  plugins: [
  	new webpack.NamedModulesPlugin(),
  	new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       }
     ]
   }
};