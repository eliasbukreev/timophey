const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
  	app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
  	contentBase: './dist',
    watchContentBase: true,
  	hot: true
  },
  plugins: [

  	new webpack.NamedModulesPlugin(),
  	new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'main.js?v=1.41',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
     { test: /\.js$/, 
       loader: "babel-loader",
       include: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, "app"),
            path.resolve(__dirname, "dist"),
            path.resolve(__dirname, "node_modules/bootstrap/js")
          ]
       },
       {
         test: /\.(scss)$/,
         use: [{
                loader: "style-loader"
            }, 
            {
                loader: "css-loader"
            },
            {
                loader: "postcss-loader",
                options: {
                  plugins: function () {
                    return [
                      require('autoprefixer')
                    ];
                  }
                }
            },
            {
                loader: "sass-loader",
                options: {
                    includePaths: ["absolute/path/a", "absolute/path/b"]
                }
            }]
       },
       {
          test: /\.(png|svg|jpg|gif|ico)$/,
          use: [
            {
                loader: 'file-loader',
                options: {
                name: '[name].[ext]',
            }
            }
          ]
       },
       {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        },
     ]
  }
};