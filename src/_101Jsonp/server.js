const express = require('express');

const app = express();

// 与前台约定的回调函数的key = callback
app.get('/get', (req, res) => {
  const queryParams = req.query;

  const data = { scale: 2 * Math.PI * queryParams.rad };
  const funName = queryParams.callback;

  // 因为浏览器是请求的是script 所以请求到的值，浏览器会以 js 的语法去解析他；就想我们平常script标签的作用一样
  res.write(`console.log("你的Jsonp到啦");${funName}(${JSON.stringify(data)})`);
  res.end();
});

const server = app.listen(8888, '127.0.0.1', () => {
  console.log('服务器运行在：\nhttp://127.0.0.1:8888');
});
