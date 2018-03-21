const fs = require('fs');

fs.stat('src/_08fs/input.txt', (error, stats) => {
  if (error) {
    return console.error(error);
  }
  console.log('stats', stats);
  console.log('isFile:', stats.isFile());
});
