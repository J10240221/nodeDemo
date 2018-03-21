//读取目录
const fs = require('fs');

console.log('查看  目录');
fs.readdir('./', (err, files) => {
  if (err) {
    return console.error(err);
  }
  files.forEach(file => {
    console.log(file);
  });
});
