const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  /**
   * 在服务端默认发送的数据是utf-8编码的
   * 但是浏览器不知道你是utf-8编码
   * 浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析，
   * 中文环境默认是gbk
   * 解决方法是正确的告诉浏览器编码类型，设置Content-type
   *   res.setHeader("Content-type", "text/html;charset=UTF-8");
   */
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