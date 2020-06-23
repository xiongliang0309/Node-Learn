const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
  console.log(`收到客户端的请求了, 请求路径是: ${request.url} `);
  response.write('hello node.js');
  response.end();
})

// npm install killport2 -g
// 3000端口如果被占用，可以使用 killport 300 来 kill 端口

server.listen(3000, () => {
  console.log('服务器启动成功了')
})