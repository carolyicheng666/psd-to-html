const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'eval-source-map',
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader?name=images/[hash].[ext]']
      },
      {
        test: /\.(html|ejs)$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new ExtractTextPlugin("[name]-[contenthash].css"),//分离css文件，使之提前加载
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new CleanWebpackPlugin(['webpack-build/*.*'], { verbose: true }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'this is psd-to-html',
      template: path.resolve(__dirname, "dist/index.tmpl.ejs")
    })
  ],
  resolve: {
    alias: {
      Js: path.resolve(__dirname, 'dist/js'),
      Style: path.resolve(__dirname, 'dist/sass')
    }
  },
  devServer: {
    contentBase: './webpack-build',
    host: '127.0.0.1',
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:8080',
        pathRewrite: {'^/api': ''}
      }
    }
  }
}