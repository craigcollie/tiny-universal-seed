import webpack from 'webpack';
import path from 'path';

import { jsLoader } from './webpack.loaders';

export default {
  entry: './src/client.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
  },

  module: {
    rules: [jsLoader],
  },

  //  This is required
  node: {
    fs: 'empty',
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => (module.context && module.context.indexOf('node_modules') !== -1),
    }),
  ],
};
