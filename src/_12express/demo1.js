const express = require('express');

const app = express();

let count = 0;

app.get('/', (req, res) => {
  count += 1;
  res.cookie('name', 'coolBoy');
  //因为这里默认返回的res.head = {Content-Type:text/html; charset=utf-8}
  res.send(`hello world!</br>你访问了网站次数为：${count}`);
});

const server = app.listen(8888, () => {
  const host = server.address().address;
  const { port } = server.address();
  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
