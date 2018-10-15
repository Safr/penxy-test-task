// taken from http://zinserjan.github.io/mocha-webpack/docs/installation/webpack-configuration.html

const nodeExternals = require('webpack-node-externals');

module.exports = {
  rules: [
    // ...
    // { test: /\.scss$/, loader: 'ignore-loader' },
    { test: /\.css$/, loader: 'ignore-loader' },
    // { test: /\.less$/, loader: 'ignore-loader' },
    { test: /\.(woff|ttf|otf|eot)$/, loader: 'ignore-loader' },
    { test: /\.(svg|svg\?embed)$/, loader: 'ignore-loader' },
    { test: /\.(png|jpg)$/, loader: 'ignore-loader' },
    // { test: /\.json$/, loader: 'json-loader' },
    { test: /\.(js)$/, loaders: ['babel'], exclude: [/node_modules/] },
    // ...
  ],
  output: {
    // use absolute paths in sourcemaps (important for debugging via IDE)
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },
  target: 'node', // webpack should compile node compatible code
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: 'inline-cheap-module-source-map',
};
