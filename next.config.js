/* eslint ignore */
const path = require("path");
const webpack = require("webpack");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
// const WebappWebpackPlugin = require('webapp-webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const withSass = require("@zeit/next-sass");

const dotenvVars = require("dotenv").config({
  path: `./env/${process.env.NODE_ENV}.env`
});

const { parsed: parsedEnv } = dotenvVars;
const nodeModules = path.resolve(process.cwd(), "node_modules");
const stylesPath = path.resolve(process.cwd(), "src/assets/styles");

if (dotenvVars) {
  if (dotenvVars.error) {
    throw dotenvVars.error;
  }
}

module.exports = withSass({
  distDir: "build",
  cssModules: true,
  cssLoaderOptions: {
    camelCase: true,
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  },
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(parsedEnv));

    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /extract-css-chunks-plugin[^]*Conflicting order between:/
        // exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
      })
    );

    config.module.rules.push({
      test: /\.(ttf|eot|woff|woff2|svg)(\?[a-z0-9]+)?$/,
      loader: "file-loader",
      options: {
        publicPath: `/_next/static`,
        outputPath: "static"
      }
    });

    // config.module.rules.push({
    //   test: /\.scss$/,
    //   loader: "sass-resources-loader",
    //   options: {
    //     sourceMap: true
    //     //     resources: [
    //     //       `${stylesPath}/_vars.scss`,
    //     //       `${stylesPath}/mixins/_hover.scss`,
    //     //       `${stylesPath}/mixins/_image.scss`,
    //     //       `${stylesPath}/mixins/_overlay.scss`,
    //     //       `${stylesPath}/mixins/_screen-reader.scss`,
    //     //     ],
    //   }
    // });

    return config;
  }
});
