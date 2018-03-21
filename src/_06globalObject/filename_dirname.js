//__filename它将输出文件所在位置的绝对路径
console.log(`address: ${__filename}`); //address: E:\learn_2018\nodeDemo\src\_06globalObject\main.js

//__dirname表示当前执行脚本所在的目录。
console.log(`address: ${__dirname}`); // address: E:\learn_2018\nodeDemo\src\_06globalObject

//setTimeout(cb, ms)
const printHello = () => {
  console.log('hello world');
  console.timeEnd(2);
};
console.time(1);
setTimeout(printHello, 1000);
for (let i = 0; i < 1000000000; i += 1) {
  //
}
console.timeEnd(1);
console.time(2);
