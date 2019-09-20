const path = require("path");
const fs = require("fs");

const NODE_ENV = process.env.NODE_ENV || "production";
const CONFIG_FILE_PATH = path.resolve(__dirname, `../env/${NODE_ENV}.env`);

try {
  fs.statSync(CONFIG_FILE_PATH);
} catch (e) {
  console.log(`Config file for environment not found at ${CONFIG_FILE_PATH}`);
  process.exit(1);
}

const { parsed: config } = require("dotenv").config({
  path: CONFIG_FILE_PATH
});

config.RUN_ENV = NODE_ENV;

module.exports = config;
