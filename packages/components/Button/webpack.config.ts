import path from 'path'
import webpack from 'webpack'

const webpackConfig: webpack.Configuration = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.ts'),
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
}

export default webpackConfig
