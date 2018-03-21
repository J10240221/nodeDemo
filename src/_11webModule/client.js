/* 执行这个的node文件需要先执行server文件启动服务器 */

const http = require('http');

// 用于请求的选项
const option = {
  host: 'localhost',
  port: 8888,
  path: '/learn_2018/nodeDemo/src/_11webModule/index.html',
};

// 处理响应的回调函数
const callback = res => {
  // 不断更新数据
  let body = '';
  res.on('data', chunk => {
    body += chunk;
  });
  res.on('end', () => {
    console.log('body', body);
  });
};

// 向服务端发送请求
const req = http.request(option, res => {
  callback(res);
});
req.end();
