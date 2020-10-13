const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const Dotenv = require('dotenv-webpack')
const path = require('path')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/assets/favicon.ico'
    }),
    new Dotenv(),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      shortname: 'Petgram 🐶',
      description: 'Con Petgram puedes encontrar fotos de animales domésticos muy facilmente',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/apple-touch-icon.png'),
          sizes: [57],
          destination: path.join('icons', 'ios'),
          ios: true
        },
        // {
        //   src: path.resolve('src/assets/apple-touch-icon-72x72.png'),
        //   sizes: [72],
        //   destination: path.join('icons', 'ios'),
        //   ios: true
        // },
        // {
        //   src: path.resolve('src/assets/apple-touch-icon-76x76.png'),
        //   sizes: [76],
        //   destination: path.join('icons', 'ios'),
        //   ios: true
        // },
        // {
        //   src: path.resolve('src/assets/apple-touch-icon-114x114.png'),
        //   sizes: [114],
        //   destination: path.join('icons', 'ios'),
        //   ios: true
        // },
        // {
        //   src: path.resolve('src/assets/apple-touch-icon-120x120.png'),
        //   sizes: [120],
        //   destination: path.join('icons', 'ios'),
        //   ios: true
        // },
        // {
        //   src: path.resolve('src/assets/apple-touch-icon-144x144.png'),
        //   sizes: [144],
        //   destination: path.join('icons', 'ios'),
        //   ios: true
        // },
        // {
        //   src: path.resolve('src/assets/apple-touch-icon-152x152.png'),
        //   sizes: [152],
        //   destination: path.join('icons', 'ios'),
        //   ios: true
        // },
        // {
        //   src: path.resolve('src/assets/apple-touch-icon-180x180.png'),
        //   sizes: [180],
        //   destination: path.join('icons', 'ios'),
        //   ios: true
        // },
        {
          src: path.resolve('src/assets/ios-icon.png'),
          size: 512,
          destination: path.join('icons', 'ios'),
          ios: 'startup'
        },
        {
          src: path.resolve('src/assets/android-icon.png'),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join('icons', 'android')
        },
        {
          src: 'src/assets/maskable-icon.png',
          sizes: '196x196',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://(res.cloudinary.com|images.unsplash.com)'
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp(
            'https://silnose-petgram-server-qjokcp6y2.vercel.app'
          ),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
