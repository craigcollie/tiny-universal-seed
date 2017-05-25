import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { jsLoader, cssLoader } from './webpack.loaders';

export default {
  entry: [
    './src/client.js',
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
  },

  module: {
    rules: [
      jsLoader,
      cssLoader,
    ],
  },

  //  This is required
  node: {
    fs: 'empty',
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => (module.context && module.context.indexOf('node_modules') !== -1),
    }),
  ],
};
