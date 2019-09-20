const { join, relative, resolve } = require("path");
const {
  existsSync,
  openSync,
  closeSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync
} = require("fs");
const sass = require("node-sass");
const export_sass = require("node-sass-export");

const IDENTIFIER = "SassToTypescriptPlugin";

/**
 * This webpack plugin exposes functions from node-export-sass into files in config.path,
 * allowing each of those files to write SASS variables to either JSON or as is currently the
 * case, TypeScript.
 * Notably it caches the output of rendering output outside of the project's watch root; without
 * this webpack can get stuck in a loop:
 *
 * File change => Recompile SASS => File changed (SASS output) => Compilation.
 * GOTO 1.
 *
 * Ideally this cache directory should live outside of the project (i.e. /tmp), however this stops
 * the output being reusable across different webpack bundles as each would get a new instance of the
 * plugin.
 */
class SassToTypescriptPlugin {

  constructor(config) {
    const defaults = {
      cacheDir: join(__dirname, ".cache"),
      outDir: resolve(__dirname, "../../../src/utils/sass"),
      path: [],
      phase: "unknown"
    };
    this.config = Object.assign({}, defaults, config);
  }

  apply(compiler) {
    compiler.hooks.run.tap(IDENTIFIER, () => this.update());
    compiler.hooks.watchRun.tap(IDENTIFIER, () => this.update());
  }

  update() {
    const { path, phase, cacheDir, outDir } = this.config;
    const functions = Object.assign(export_sass("."), {
      ["export_path($filename)"]: filename => this.getCachePath(cacheDir, filename)
    });

    console.log(`Compiling SASS variables to TypeScript (${phase})`);

    sass.renderSync({
      file: path,
      functions
    });

    readdirSync(cacheDir, { withFileTypes: true })
      .filter(dirent => dirent.isFile())
      .map(dirent => dirent.name)
      .map(file => {
        this.createFileIfNotExists(join(outDir, file));
        return file;
      })
      .forEach(file => {
        const outPath = join(outDir, file);
        const srcBuffer = readFileSync(join(cacheDir, file));
        const tgtBuffer = readFileSync(join(outDir, file));

        if (srcBuffer.compare(tgtBuffer) !== 0) {
          console.log(`TypeScript definitions for ${file} were stale, refreshing them`);
          writeFileSync(outPath, srcBuffer);
        }
      });
  }

  getCachePath(cacheDir, filename) {
    const filenameStr = filename.getValue();
    const filePath = join(cacheDir, filenameStr);

    if (!existsSync(cacheDir)) {
      mkdirSync(cacheDir);
    }

    this.createFileIfNotExists(filePath);

    const relativePath = relative(resolve(__dirname, "../../.."), filePath);
    return new sass.types.String(relativePath);
  }

  createFileIfNotExists(path) {
    if (!existsSync(path)) {
      closeSync(openSync(path, "w"));
    }

    return path;
  }

}

module.exports = SassToTypescriptPlugin;
