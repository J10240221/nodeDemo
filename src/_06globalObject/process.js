process.on('exit', code => {
  setTimeout(() => {
    console.log('这个代码永远不会执行');
  }, 0);
  console.log('退出前执行', code);
});
// process.on('uncaughtException', code => {
//   console.log('uncaughtException', code);
// });
console.log('程序执行结束');

//输出到终端
process.stdout.write('hello world!\n');

// 通过参数读取
process.argv.forEach((value, index, array) => {
  console.log(`通过参数读取${index}: ${value}`);
});

// 获取执行路径
console.log('获取执行路径', process.execPath);

// 平台信息
console.log('平台信息', process.platform);

// 当前进程的进程号。
console.log('当前进程的进程号', process.pid);

// 输出当前目录
console.log(`当前目录: ${process.cwd()}`);

// 输出当前版本
console.log(`当前版本: ${process.version}`);

// 输出内存使用情况
console.log('输出内存使用情况', process.memoryUsage());
