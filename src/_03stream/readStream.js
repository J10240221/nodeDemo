const fs = require('fs');

let data = '';

//创建可读流
const readerStream = fs.createReadStream('text.txt');

//设置编码为 utf8
readerStream.setEncoding('UTF8');

//处理事件流 -> data, end, and error
readerStream.on('data', chunk => {
  data += chunk;
  console.log('data', data);
});

readerStream.on('end', () => {
  console.log('end', data);
});

readerStream.on('error', err => {
  console.log(err.stack);
});

console.log('程序执行完毕');

