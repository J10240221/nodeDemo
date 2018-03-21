const fs = require('fs');

//创建一个可读流
const readerStream = fs.createReadStream('src/_03stream/pipesrc/_03stream/input.txt');

//创建一个可写流
const writeStream = fs.createWriteStream('src/_03stream/pipesrc/_03stream/output.txt');

//管道读写操作
//读取input.txt文件内容， 并将内容写入到output.txt中
readerStream.pipe(writeStream);

console.log('程序执行完毕');
