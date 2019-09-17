module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/config/jest/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/mock-file.js`,
  },
  testEnvironment: 'node',
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [
    `<rootDir>/config/jest/jest-loader-shim.js`,
    `<rootDir>/config/jest/jest-setup-tests.js`,
  ],
  cacheDirectory: './.cache/jest',
  coverageThreshold: {
    global: {
      statements: 72,
      branches: 70,
      functions: 70,
      lines: 73,
    },
  },
  // collectCoverage: true,
  // reporters: [
  //   [
  //     'jest-nyancat-reporter',
  //     {
  //       suppressErrorReporter: false,
  //     },
  //   ],
  // ],
};
