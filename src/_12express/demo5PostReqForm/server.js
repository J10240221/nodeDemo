const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// 创建 application/x-www-form-urlencoded 编码解析
const urlencodeParser = bodyParser.urlencoded({ extended: false });
// console.log('urlencodeParser:\n', urlencodeParser);

app.use(express.static('public'));

app.get('/index.html', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/process_post', urlencodeParser, (req, res) => {
  // 输出 JSON 格式
  const response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };

  console.log('response', response);
  console.log('res', res);
  res.end(JSON.stringify(response));
});

const server = app.listen(8888, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
