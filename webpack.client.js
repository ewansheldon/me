const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./client/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist/public"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  // plugins: [
  //   ...(isProd
  //     ? [
  //         new MiniCssExtractPlugin({
  //           filename: "main.css",
  //         }),
  //       ]
  //     : []),
  // ],
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
  devtool: isProd ? false : "inline-source-map",
  watch: !isProd,
};
