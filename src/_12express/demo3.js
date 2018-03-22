const express = require('express');

const app = express();

app.use(express.static('public'));

// 主页输出 hello world
app.get('/', (req, res) => {
  console.log('req', req.url.pathname);
  res.send('Hello GET');
});

const server = app.listen(8888, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('应用实例，访问地址为 http://%s:%s', host, port);
  console.log('需要访问的路径为：\nhttp://localhost:8888/images/01.png');
});
