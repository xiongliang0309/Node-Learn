// require是一个方法，用来加载模块的


// node中没有全局作用域，只有模块作用域
// 外部不能访问内部， 内部也不能访问外部

console.log('a start');
require('./b');