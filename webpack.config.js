const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    //通过将公共模块拆出来，最终合成的文件能够在最开始的时候加载一次，便存起来到缓存中供后续使用。
    vendor: __dirname + "/dist/js/scrollreveal.min.js",//公共模块
    main: __dirname + "/dist/main.js"
  },
  output: {
    path: __dirname + "/webpack-build",//打包后的文件存放的地方
    filename: "[name]-[chunkhash].js"//打包后输出文件的文件名
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=images/[hash].[ext]'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-withimg-loader'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new CleanWebpackPlugin(['webpack-build'], { verbose: true }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + "/dist/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    })
  ]
}