import webpack from 'webpack';

export default {
  entry: './src/client.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
  },
  devServer: {
    port: 3000,
    proxy: {
      '*': {
        target: 'http://localhost:8080',
      },
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ],
  },
};
