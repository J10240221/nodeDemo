const buf1 = Buffer.alloc(10); //创建一个长度为10、且用0填充的Buffer。

const buf2 = Buffer.alloc(10, 1); //创建一个长度为10、且用 0*1 填充的 Buffer

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

const buf4 = Buffer.from([1, 2, 3]); // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。

const buf5 = Buffer.from('test'); // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。

const buf6 = Buffer.from('test', 'latin1'); // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。

const bufTest = Buffer.alloc(256);
const len = bufTest.write('heheda大');
console.log('写入的字节数为：', len);

bufTest.toString();
console.log('bufTest.toString();', bufTest.toString('utf8'));
console.log('buf1;', buf1.toString('utf8'));
console.log('buf2;', buf2.toString('utf8'));
console.log('buf3;', buf3.toString('utf8'));
console.log('buf4;', buf4.toString('utf8'));
console.log('buf5;', buf5.toString('utf8'));
console.log('buf6;', buf6.toString('utf8'));
