const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const { NetlifyPlugin } = require("netlify-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.tsx",
    styles: "./src/styles/index.scss",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      { test: /\.tsx?$/i, loader: "babel-loader" },
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|icon)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
     title: "Space Tourism",
     template: "./public/index.html" 
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new NetlifyPlugin({
      redirects: [
        {
          from: "/*",
          to: "/index.html",
          status: 200,
        },
      ],
    }),
    new WebpackPwaManifest({
      name: "Space Tourism",
      short_name: "Space tourism",
      start_url: "/",
      display: "standalone",
      scope: "/",
    }),
    ],
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
};
