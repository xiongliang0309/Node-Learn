const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  // 处理中文乱码问题
  res.setHeader("Content-type", "text/html;charset=UTF-8");
  console.log(`收到请求了，请求的路径是: ${req.url}`);
  switch(req.url) {
    case '/login':
      return res.end('登陆');
    case '/register':
      return res.end('注册');
    case '/product':
      return res.end(JSON.stringify([
        {
          name: 'xl',
          sex: 'male',
          age: 18,
        },
        {
          name: 'xss',
          sex: 'female',
          age: 18,
        },
      ]));
    default:
      return res.end('404 not found');
  }
})

// res.end() 响应的数据只能是字符串/二进制数据

server.listen(8081, () => {
  console.log('服务器启动成功');
})