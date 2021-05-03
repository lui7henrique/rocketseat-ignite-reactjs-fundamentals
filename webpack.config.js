const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.jsx"), // qual é o arquivo inicial da aplicação
  output: {
    path: path.resolve(__dirname, "dist"), // qual é o arquivo que vou gerar com webpack
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"], // leitor de extensoes de arquivos
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/, // regex com scape
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
