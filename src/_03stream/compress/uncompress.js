const fs = require('fs');
const zlib = require('zlib');

//解压缩 input.txt.gz 文件为 input.txt
fs
  .createReadStream('src/_03stream/compress/input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('src/_03stream/compress/inputUnCompress.txt'));

console.log('文件解压缩完毕');
