const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.export = {
  // ビルド対象のファイル
  entry: './src/index.js',
  output: {
    // 出力ファイル名
    filename: 'main.js',
    // 出力先のディレクトリ名
    path: outputPath,
  },
  // エラーを回避するため
  devtool: 'eval-source-map',
  devServer: {
    // ディレクトリを指定(必須)
    contentBase: outputPath,
    // 開くファイル(index.html を開く)
    openPage: './'
  },
  module: {
    rules: [
      {
        // 対象ファイル(.js, .mjs で終わるファイル全て)
        test: /\.m?js$/i,
        // node_modules ディレクトリは対象外にする
        exclude: /node_modules/,
        // 使用するローダー
        use: 'babel-loader',
      },
    ],
  },
};