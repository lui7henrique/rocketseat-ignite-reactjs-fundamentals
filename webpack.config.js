const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

const isDevelopment = process.env.NODE_env != 'production'; 

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source:map",
  entry: path.resolve(__dirname, "src", "index.jsx"), // qual é o arquivo inicial da aplicação
  output: {
    path: path.resolve(__dirname, "dist"), // qual é o arquivo que vou gerar com webpack
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"], // leitor de extensoes de arquivos
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"), // aonde fica a pasta do nosso arquivo html estático 
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.jsx$/, // regra pra ler arquivos js/jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        },
      },
      {
        test: /\.scss$/, // regra pra ler arquivos css
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", 'sass-loader'],
      },
    ],
  },
};
