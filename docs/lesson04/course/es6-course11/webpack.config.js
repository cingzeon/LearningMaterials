var path = require("path");
var webpack = require("webpack");

var config = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path:path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },
  module: {
    loader: [
      {
        test:/\.js$/,
        loader: "babel",
        exclued: /node_modules/
      }
    ]
  }

}

export default config;
