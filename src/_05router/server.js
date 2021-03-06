const http = require('http');
const url = require('url');

function start(route) {
  function onRequest(request, response) {
    const { pathname } = url.parse(request.url);
    console.log(`Request for ${pathname} received`);

    route(pathname);

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('hello world');
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started at http://localhost:8888');
}

exports.start = start;
