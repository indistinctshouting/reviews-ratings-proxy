const path = require('path');

module.exports = {
  mode: "development",
  entry: "./client/index.jsx",
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, '/node_modules/')
        ],
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"]
        }
      }
    ]
  }
}