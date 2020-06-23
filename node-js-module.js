// node中的js核心模块

// 获取机器信息
const os = require('os');

// 操作路径
const path = require('path');

// 获取当前机器的cpu信息

console.log('cpu info:', os.cpus());


// 获取内存

console.log('memory:', os.totalmem());


// 获取一个路径中的扩展名

console.log('extName:', path.extname('c:a/b/c/d/hello.js'));

