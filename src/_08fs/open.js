const fs = require('fs');

// 异步打开文件
console.log('准备打开文件！');

fs.open('src/_08fs/input.txt', 'r+', (error, fd) => {
  if (error) {
    return console.error(error);
  }
  console.log('文件打开成功，文件描述符fd为:', fd);
});

console.log('程序执行结束');
