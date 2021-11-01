const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
    publicPath: "/",
  },

  devServer: {
    static: path.join(__dirname, "dist"),
    historyApiFallback: true,
  },
  
  plugins: [new HtmlWebpackPlugin({
    template: "src/index.html"
  })]
}
