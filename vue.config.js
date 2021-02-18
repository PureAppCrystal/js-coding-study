// const webpack = require("webpack");
module.exports = {
  devServer: {
    overlay: false,
  },
  runtimeCompiler: true,
  // lintOnSave: false,
  // outputDir: '../src/main/webapp/site/',
  publicPath: "",
  /* configureWebpack: config => {
    config.devtool = 'source-map';
  }, */

  configureWebpack: {
    devtool: "source-map",

    /* plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ], */
  },
  chainWebpack: config => {
    config.optimization.delete("splitChunks");
  },
  css: {
    sourceMap: process.env.NODE_ENV === "development",
  },
  productionSourceMap: false,
};
