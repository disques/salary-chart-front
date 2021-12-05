// react_start/webpack.config.js
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "js/app": ["./src/App.jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            // require.resolve("css-loader"),
            // options: {
            //   importLoaders: 1,
            //   modules: true,
            // },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|ico)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2|)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    host: "0.0.0.0",
    port: "8080",
  },
};
