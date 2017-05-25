import autoprefixer from 'autoprefixer';

export const sassFilePaths = [
  'src/styles',
  'node_modules/normalize-scss/sass',
];

export const sassLoaderConfig = {
  loader: 'sass-loader',
  options: {
    includePaths: sassFilePaths,
  },
};

export const postCssLoaderConfig = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
    ],
  },
};

export const cssLoaderConfig = {
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 1,
    localIdentName: '[name]__[local]--[hash:base64:5]',
  },
};
