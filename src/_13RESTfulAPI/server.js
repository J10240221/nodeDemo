const express = require('express');
const fs = require('fs');

const app = express();

app.get('/listUsers', (req, res) => {
  fs.readFile(`${__dirname}/users.json`, 'utf8', (err, data) => {
    console.log(data);
    res.end(data);
  });
});

//添加的新用户数据
const user = {
  user4: {
    name: 'mohit',
    password: 'password4',
    profession: 'teacher',
    id: 4,
  },
};

const readMyFile = (res, cb) => {
  fs.readFile(`${__dirname}/users.json`, 'utf8', (err, data) => {
    if (err) {
      console.log('错误消息：', err);
      res.end('出错啦');
      return;
    }
    cb(JSON.parse(data));
  });
};

app.get('/addUser', (req, res) => {
  fs.readFile(`${__dirname}/users.json`, 'utf8', (err, data) => {
    const newData = JSON.parse(data);
    newData.user4 = user.user4;
    console.log(newData);
    res.end(JSON.stringify(newData));
  });
});

// 用于根据id读取特定用户信息
app.get('/:id', (req, res) => {
  fs.readFile(`${__dirname}/users.json`, 'utf8', (err, data) => {
    const newData = JSON.parse(data);
    let targetObj = { msg: '未查到' };
    for (const k in newData) {
      if (newData[k].id == req.params.id) {
        targetObj = newData[k];
      }
    }
    res.end(JSON.stringify(targetObj));
  });
});

// 删除用于
app.get('/delUser/:id', (req, res) => {
  readMyFile(res, data => {
    for (const k in data) {
      if (data[k].id == req.params.id) {
        delete data[`user${req.params.id}`]; // eslint-disable-line
      }
    }
    res.end(JSON.stringify(data));
  });
});

const server = app.listen(8888, '127.0.0.1', () => {
  const host = server.address().address;
  const { port } = server.address();
  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
