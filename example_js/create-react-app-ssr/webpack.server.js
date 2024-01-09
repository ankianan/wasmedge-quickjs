const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [{
  entry: './server/index.node.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('server-build'),
    filename: 'index.node.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ["css-loader"]
      },
      {
        test: /\.svg$/,
        use: ["svg-url-loader"]
      }
    ]
  }
},{
  entry: './server/index.js',
  externals: [
    {"wasi_http": "wasi_http"},
    {"http": "http"},
    {"wasi_net": "wasi_net"},
    {"std": "std"}
  ],
  output: {
    path: path.resolve('server-build'),
    filename: 'index.js',
    chunkFormat: "module",
    library: {
      type: "module"
    },
  },
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ["css-loader"]
      },
      {
        test: /\.svg$/,
        use: ["svg-url-loader"]
      }
    ]
  }
}];
