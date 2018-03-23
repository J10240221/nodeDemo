// 代码有问题，没啥好看的
const fs = require('fs');
// eslint-disable-next-line
const child_process = require('child_process');

for (let i = 1; i < 3; i += 1) {
  const workerProcess = child_process.exec(
    `node ${__dirname}/support${i}.js`,
    // eslint-disable-next-line
    (error, stdout, stderr) => {
      if (error) {
        console.log(error.stack);
        console.log(`Error code: ${error.code}`);
        console.log(`Signal received: ${error.signal}`);
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  );

  workerProcess.on('exit', code => {
    console.log(`子进程已退出，退出码 ${code}`);
  });
}
