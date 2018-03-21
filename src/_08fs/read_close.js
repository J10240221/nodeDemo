const fs = require('fs');

const buf = Buffer.alloc(1024);

console.log('准备打开已存在的文件！');
fs.open('src/_08fs/input.txt', 'r+', (err, fd) => {
  if (err) {
    return console.error(err);
  }
  console.log('文件打开成功！');
  console.log('fd', fd); // number
  console.log('准备读取文件：');

  //只有 fs.open 之后，才能通过指定的fd读取到指定文件
  fs.read(fd, buf, 0, buf.length, 0, (error, bytes) => {
    if (error) {
      console.log(error);
    }
    console.log(`${bytes}  字节被读取`);

    // 仅输出读取的字节
    if (bytes > 0) {
      console.log(buf.slice(0, bytes).toString());
    }
  });
  //close file
  fs.close(fd, err => {
    if (err) {
      return console.error(err);
    }
    console.log('文件已经关闭');
  });
});
console.log('程序执行完成');
