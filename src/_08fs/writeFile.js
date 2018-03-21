const fs = require('fs');

const data = '我是writeFile写入的内容';

fs.writeFile('src/_08fs/input.txt', data, error => {
  if (error) {
    return console.error(error);
  }
  console.log('文件写入成功');
  console.log('————————分割线——————————');

  //读取文件内容
  fs.readFile('src/_08fs/input.txt', (err, bufferData) => {
    if (err) {
      return console.error(err);
    }
    console.log(`异步读取文件的数据为：${bufferData.toString()}`);
  });
});
