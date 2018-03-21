const net = require('net');

const client = net.connect({ port: 8888 }, () => {
  console.log('连接到服务器！');
});
client.on('data', data => {
  console.log(`获取的数据为${data.toString()}`);
  client.end();
});
client.on('end', () => {
  console.log('断开与服务器的连接');
});
