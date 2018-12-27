const path = require('path');

module.exports = {
  context: __dirname + '/client',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|server/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css|.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  plugins: []
};
