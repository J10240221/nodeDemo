const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 解析请求
  const pathName = url.parse(req.url).pathname;

  console.log(`Request for ${pathName} received`);

  fs.readFile(pathName, (err, bufferData) => {
    if (err) {
      console.log(err);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write(`address: ${pathName} not found`);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });

      // 响应文件内容
      res.write(bufferData.toString());
    }

    // 发送响应数据
    res.end();
  });
});

server.listen(8888, '127.0.0.1');

console.log('Server is run at: http://127.0.0.1:8888/');
console.log(
  '需要请求的地址为: http://127.0.0.1:8888/learn_2018/nodeDemo/src/_11webModule/index.html'
);
