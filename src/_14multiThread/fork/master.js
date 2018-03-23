const fs = require('fs');
// eslint-disable-next-line
const child_process = require('child_process');

for (let i = 0; i < 3; i += 1) {
  const workerProcess = child_process.fork(`${__dirname}/support.js`, [i + 10]);

  workerProcess.on('close', code => {
    console.log(`子进程已退出，退出码:${code}`);
  });
}
