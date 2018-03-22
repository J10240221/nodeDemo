const express = require('express');

const app = express();

// 主页输出 hello world
app.get('/', (req, res) => {
  console.log('主页GET请求');
  res.send('Hello GET');
});

// POST 请求
app.post('/', (req, res) => {
  console.log('主页POST请求');
  res.send('Hello POST');
});

// /del_user 页面响应
app.get('/del_user', (req, res) => {
  console.log('/del_user 响应 DELETE 请求');
  res.send('删除页面');
});

// /list_user 页面 GET 请求
app.get('/list_user', (req, res) => {
  console.log('/list_user GET 请求');
  res.send('用户列表页');
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', (req, res) => {
  console.log('ab*cd GET 请求');
  res.send('正则匹配');
});

const server = app.listen(8888, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
