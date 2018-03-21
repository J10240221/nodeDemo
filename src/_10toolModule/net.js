const net = require('net');

const server = net.createServer(connection => {
  console.log('client connected');
  connection.on('end', () => {
    console.log('客户端关闭连接');
  });
  connection.write('hello world!\r\n');
  connection.pipe(connection);
});

server.listen(8888, () => {
  console.log('server is listening');
});
