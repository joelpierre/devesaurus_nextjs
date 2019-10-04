/* eslint ignore */
const path = require("path");
const flowRight = require("lodash/flowRight");
const webpack = require("webpack");

const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const SassToTypescriptPlugin = require("./config/webpack/SassToTypescriptPlugin");

const withSass = require("@zeit/next-sass");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withFonts = require("next-fonts");

const env = require("./config");
const aliases = require("./config/webpack/aliases");

const { PHASE_PRODUCTION_SERVER } = require("next/constants");

const {
  ...publicRuntimeConfig
} = env;

const enhancer = flowRight(
  withFonts,
  withSass,
  withBundleAnalyzer
);

module.exports = (phase) => {
  return enhancer(
    {
      webpack(config, options) {

        config.plugins.push(
          new webpack.EnvironmentPlugin(env)
        );

        config.resolve.alias = Object.assign(config.resolve.alias, aliases);

        if (options.dev) {
          config.devtool = "cheap-module-eval-source-map";
        }

        config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;

        config.module.rules.push({
          test: /\.(jpe?g|png|gif|ico|webp)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                fallback: "file-loader",
                publicPath: "/_next/static/images/",
                outputPath: `${options.isServer ? "../" : ""}static/images/`,
                name: "[name]-[hash].[ext]"
              }
            }
          ]
        });

        config.module.rules.push({
          test: /\.svg$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8,
                fallback: "file-loader",
                publicPath: "/_next/static/images/",
                outputPath: `${options.isServer ? "../" : ""}static/images/`,
                name: "[name]-[hash].[ext]"
              }
            },
            "svgo-loader"
          ]
        });

        config.plugins.push(
          new SassToTypescriptPlugin({
            phase: options.isServer ? "server" : "client",
            path: path.resolve("./config/webpack/SassToTypescriptPlugin/vars.scss")
          })
        );

        if (options.isServer) {
          // Do not run type checking twice:
          config.plugins.push(new ForkTsCheckerWebpackPlugin({
            watch: path.join(__dirname, "src"),
            tsconfig: path.join(__dirname, "tsconfig.json"),
            tslint: path.join(__dirname, "tslint.json")
          }));
        }

        if (!options.isServer && phase !== PHASE_PRODUCTION_SERVER) {
          const CopyWebpackPlugin = require("copy-webpack-plugin");

          config.plugins.push(new CopyWebpackPlugin([
            {
              from: path.resolve(__dirname, "src/static/favicon"),
              to: "static/favicon",
              toType: "dir"
            }
          ]));
        }

        config.plugins.push(
          new FilterWarningsPlugin({
            exclude: /extract-css-chunks-plugin[^]*Conflicting order between:/
            // exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
          })
        );

        config.plugins.push(new webpack.DefinePlugin({
          "process.env": JSON.stringify(env)
        }));

        // config.module.rules.push({
        //   test: /\.scss$/,
        //   loader: "typings-for-css-modules-loader?modules&sass"
        // });
        //
        // config.module.rules.push({
        //   test: /\.scss\.d\.ts$/,
        //   loader: "ignore-loader"
        // });

        config.module.rules.push({
          test: /\.scss$/,
          loader: "sass-resources-loader",
          options: {
            sourceMap: true,
            resources: [
              `${aliases.sass}/_vars.scss`,
              `${aliases.sass}/_core.scss`
            ]
          }
        });

        return config;
      },
      distDir: "build",
      cssModules: true,
      cssLoaderOptions: {
        namedExports: true,
        camelCase: true,
        importLoaders: 1,
        localIdentName: "[local]"
      },
      // expose config on server and client-side
      // https://github.com/zeit/next.js#exposing-configuration-to-the-server--client-side
      publicRuntimeConfig: {
        ...publicRuntimeConfig,
        NODE_ENV: process.env.NODE_ENV,
        RUN_ENV: process.env.RUN_ENV,
        APP_VERSION: process.env.APP_VERSION
      },
      assetPrefix: "",
      analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: "static",
          reportFilename: "./server.html"
        },
        browser: {
          analyzerMode: "static",
          reportFilename: "./client.html"
        }
      },
      poweredByHeader: false
    }
  );
};
