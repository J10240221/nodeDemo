const fs = require('fs');
const zlib = require('zlib');

//压缩 input.txt 文件为 input.txt.gz
fs
  .createReadStream('src/_03stream/compress/input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('src/_03stream/compress/input.txt.gz'));

console.log('文件压缩完毕');
