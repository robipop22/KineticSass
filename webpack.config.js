const webpack = require('webpack');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './root/src/scripts/index.js'
    },
    output: {
        path: '/root/dist/scripts',
        filename: 'main.js',
        publicPath: '/root/dist/scripts'
    },
    watch: true,
    devtool: 'eval',
    module: {
        loaders: [
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.html$/,
            loader: "raw-loader"
          },
          {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './root/index.html'
        })
    ]
};
