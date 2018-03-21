const fs = require('fs');

fs.readFile('src/_08fs/input.txt', (error, dataBuffer) => {
  if (error) {
    return console.error(error);
  }
  console.log('异步读取dataBuffer.toString()', dataBuffer.toString());
});

const dataSync = fs.readFileSync('src/_08fs/input.txt');
console.log('同步读取', dataSync.toString());
console.log('程序执行结束');
