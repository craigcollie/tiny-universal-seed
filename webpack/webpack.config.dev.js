import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import path from 'path';

const rootPath = path.resolve(__dirname, './../');

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/client.js',
  ],

  output: {
    filename: '[name].bundle.js',
    path: `${rootPath}/public`,
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

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => (module.context && module.context.indexOf('node_modules') !== -1),
    }),
  ],
};

//  Start the webpack-dev-server and get HMR going
new WebpackDevServer(webpack(config), {
  contentBase: `${rootPath}/public`,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  },
  proxy: {
    '*': {
      target: 'http://localhost:8080'
    }
  }
}).listen(3000);
