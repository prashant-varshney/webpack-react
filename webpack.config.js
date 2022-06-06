const path = require('path');
module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: './dist',
    },
    port: 9000,
    open: true,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'dist'),
        use: 'babel-loader',
      },
    ],
  },
};
