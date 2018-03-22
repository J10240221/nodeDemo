const express = require('express');

const app = express();

// 主页输出 hello world
app.get('/index.html', (req, res) => {
  console.log(`__dirname: ${__dirname}`);
  res.sendFile(`${__dirname}/index.html`);
});
app.get('/process_get', (req, res) => {
  console.log(`__dirname: ${__dirname}`);

  // 输出 JSON 格式
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  console.log('response', response);
  res.end(JSON.stringify(response));
});

const server = app.listen(8888, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
