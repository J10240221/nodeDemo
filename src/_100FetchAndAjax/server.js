/*
 * 创建一个本地 server，
 * client 通过 Ajax 请求此服务器，server 返回一个本地 Img,
 * client 使用 Promise 处理服务器的响应
 */
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // 支持跨域请求；

app.get('/promiseGet', (req, res) => {
  res.json({ data: 'GET request! I come from your server' });
});

app.post('/promisePost', (req, res) => {
  res.json({ data: 'POST request! I come from your server' });
});

const server = app.listen(8888, '127.0.0.1', () => {
  //
  console.log('服务器运行在：\nhttp://127.0.0.1:8888');
});
