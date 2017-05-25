import ExtractTextPlugin from 'extract-text-webpack-plugin';

import {
  sassLoaderConfig,
  postCssLoaderConfig,
  cssLoaderConfig,
} from './config/loaders.config';

export const jsLoader = {
  test: /\.js?$/,
  exclude: /node_modules/,
  use: [
    'babel-loader',
  ],
};

export const cssLoader = {
  test: /\.scss?$/,
  exclude: /node_modules/,
  loader: ExtractTextPlugin.extract({
    use: [
      cssLoaderConfig,
      postCssLoaderConfig,
      sassLoaderConfig,
    ],
  }),
};
