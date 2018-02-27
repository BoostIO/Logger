const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options:{
          transpileOnly: true
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devtool: "inline-source-map",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
