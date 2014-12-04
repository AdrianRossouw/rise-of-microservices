var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: "./slides.js",
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jade$/, loader: "jade-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.png$/, loader: "file-loader" },
      { test: /\.gif$/, loader: "file-loader" }
    ]
  },
  resolve: {
    root: [path.join(__dirname, "bower_components")]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "Webpack Über Alles | an introduction"  })
]
};
