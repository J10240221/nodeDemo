/* 以下实例表单通过 POST 提交并输出数据： */

const http = require('http');
const querystring = require('querystring');

const POST = 8888;

//POST 请求的内容全部的都在请求体中，http.ServerRequest 并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作。
//node.js 默认是不会解析请求体的，当你需要的时候，需要手动来做。
const server = http.createServer((req, res) => {
  // 定义一个postBody变量，用于暂存请求的信息
  let postBody = '';

  // 通过req的data事件监听函数，每当接受到请求的数据，就累加到post变量中
  req.on('data', chunk => {
    console.log('chunk', chunk);
    postBody += chunk;
  });

  // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回
  req.on('end', () => {
    // 设置响应头部信息及编码
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });

    // 解析参数
    postBody = querystring.parse(postBody);

    console.log('postBody', postBody);
    res.write(`姓名为：${postBody.name}`);
    res.write('<br>');
    res.write(`年龄为：${postBody.age}`);
    res.end();
  });
});

server.listen(POST, '127.0.0.1');

console.log(`启动服务地址为：http://127.0.0.1:${POST}`);
