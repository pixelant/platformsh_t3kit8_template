const path = require('path')
// import { path } from 'path'
// var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const InlineChunkManifestHtmlWebpackPlugin = require('inline-chunk-manifest-html-webpack-plugin')

module.exports = {
  // mode: 'development',
  mode: 'none',
  // experiments: { outputModule: true },
  entry: './src/index.js',
  devtool: 'source-map',
  optimization: {
    // runtimeChunk: true
  },
  output: {
    // iife: true,
    // module: true,
    filename: 'ddd.[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
    // library: 'rrrr',
    // libraryTarget: 'var',
    // libraryTarget: 'this',
    // libraryTarget: 'commonjs2',
    // libraryTarget: 'umd',
    // libraryTarget: 'window',
    // libraryTarget: 'global',
    // auxiliaryComment: {
    //   root: 'Root Comment',
    //   commonjs: 'CommonJS Comment',
    //   commonjs2: 'CommonJS2 Comment',
    //   amd: 'AMD Comment'
    // }
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   // template: 'wptest.html'
    // })
    // new InlineChunkManifestHtmlWebpackPlugin()
  ],
  // optimization: {
  //   runtimeChunk: 'single'
  // },
  externals: {
    jquery: 'jQuery'
  }
}
