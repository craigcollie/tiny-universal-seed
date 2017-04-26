import webpack from 'webpack';
import rootPath from 'root-path';
import postcssImport from 'postcss-import';
import postcssUrl from 'postcss-url';
import postcssCustomProperties from 'postcss-custom-properties';
import postcssCssNext from 'postcss-cssnext';

export default [
  postcssImport({
    path: rootPath('src/common/styles'),
    addDependencyTo: webpack
  }),
  postcssUrl(),
  postcssCustomProperties(),
  postcssCssNext(),
];
