import webpack from 'webpack';
import path from 'path';

export default {
  entry: './src/client.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../public'),
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
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
