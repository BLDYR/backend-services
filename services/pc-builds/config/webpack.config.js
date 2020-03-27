const path = require('path');
const nodeExternals = require('webpack-node-externals');

const BUILD_DIR = path.resolve(__dirname, '../dist');
const PUBLIC_PATH = '/';
const ENV = process.env.NODE_ENV;

module.exports = (env) => {
  return {
    devtool: 'source-map',
    target: 'node',
    externals: nodeExternals(),
    mode: env,
    entry: path.resolve(__dirname, '../app/index.js'),
    output: {
      path: BUILD_DIR,
      publicPath: PUBLIC_PATH,
      filename: 'pc-builds.app.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@apis': path.resolve(__dirname, '../app/apis/'),
        '@controllers': path.resolve(__dirname, '../app/controllers/'),
        '@utils': path.resolve(__dirname, '../app/utils'),
        '@routes': path.resolve(__dirname, '../app/routes/'),
      }
    }
  };
}
