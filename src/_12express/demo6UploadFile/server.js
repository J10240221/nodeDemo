const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: './tmp' }).array('image'));

app.get('/index.html', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/file_upload', (req, res) => {
  console.log('上传的文件信息', req.files[0]); // 上传的文件信息

  const des_file = `${__dirname}/${req.files[0].originalname}`; // eslint-disable-line
  fs.readFile(req.files[0].path, (err, data) => {
    // 文件下载到当前目录下
    fs.writeFile(des_file, data, error => {
      let response = {};
      if (error) {
        console.log(error);
      } else {
        response = {
          message: 'File uploaded successfully',
          filename: req.files[0].originalname,
        };
      }
      console.log('response:', response);
      res.end(JSON.stringify(response));
    });
  });
});

const server = app.listen(8888, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
