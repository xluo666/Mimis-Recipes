const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './client/src/index.jsx'),
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new CompressionPlugin({
g
    }),
  ],
};