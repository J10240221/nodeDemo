const http = require('http');
const url = require('url');
const util = require('util');

const POST = 8888;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  // 解析 url 参数
  const params = url.parse(req.url, true).query;
  res.write(`网站名: ${params.name}`);
  res.write('\n');
  res.write(`网站URL: ${params.url}`);
  res.end();
});

server.listen(POST, '127.0.0.1');

console.log(`启动服务地址为：http://127.0.0.1:${POST}`);
