const path = require("path");

const aliases = {
  "sass": path.resolve(__dirname, "../../src/assets/sass"),
  "@jpp/services": path.resolve(__dirname, "../../src/services"),
  "@jpp/typings": path.resolve(__dirname, "../../src/typings"),
  "@jpp/components": path.resolve(__dirname, "../../src/components"),
  "@jpp/shared": path.resolve(__dirname, "../../src/shared"),
  "@jpp/layouts": path.resolve(__dirname, "../../src/layouts"),
  "@jpp/atoms": path.resolve(__dirname, "../../src/components/_atoms"),
  "@jpp/molecules": path.resolve(__dirname, "../../src/components/_molecules"),
  "@jpp/organisms": path.resolve(__dirname, "../../src/components/_organisms")
};

module.exports = aliases;
