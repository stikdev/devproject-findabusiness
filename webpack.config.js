const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        ],
      },
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          }
        ],
      },
      {
        test: /\.cjsx$/,
        use: ['coffee-loader', 'cjsx-loader']
      },
      {
        test: /\.coffee$/,
        use: ['coffee-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
            // options: {
            //   includePaths: [
            //     '~bootstrap-sass/assets/stylesheets'
            //   ]
            // }
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, 'node_modules/react/dist/react.js'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom/dist/react-dom.js')
    }
  },
  externals: {
      google: "google"
  },
  devtool: 'inline-source-map'
}
