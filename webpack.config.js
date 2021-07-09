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
};