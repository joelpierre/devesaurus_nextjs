const postcssPresetEnv = require(`postcss-preset-env`);

module.exports = function() {
  return {
    plugins: [
      postcssPresetEnv({
        stage: 0
      }),
      require("autoprefixer")({
        grid: true
      }),
      require("postcss-flexbugs-fixes"),
      require("autoprefixer"),
      // config docs: https://github.com/cuth/postcss-pxtorem
      require("postcss-pxtorem")({
        rootValue: 16,
        unitPrecision: 5,
        propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0,
      })
    ]
  };
};
