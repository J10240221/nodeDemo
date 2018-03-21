const fs = require('fs');

const data = '我是要被写入的文字';

//创建一个可以写入的流，写入到文件 src/_03stream/output.txt 中
const writeStream = fs.createWriteStream('src/_03stream/output.txt');

//使用 UTF8 编码写入数据
writeStream.write(data, 'UTF8');

writeStream.end(() => {
  console.log('end被调用');
});

writeStream.on('finish', () => console.log('finish'));

writeStream.on('error', err => console.log(err.stack));

console.log('程序执行完毕');
