import * as path from 'path';

module.exports = {
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "fs": false,
      "os": false,
      "stream": require.resolve("stream-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "buffer": require.resolve("buffer/"),
      "zlib": require.resolve("browserify-zlib"),
      "util": require.resolve("util/")
    },
    alias: {
      'path': path.resolve(__dirname, 'node_modules/path-browserify'),
      'jasmine-core': path.resolve(__dirname, 'node_modules/jasmine-core/lib/jasmine-core/jasmine.js')

    },
    node: {
        global: true,
        __filename: true,
        __dirname: true,
    }
  }
};