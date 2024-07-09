'use strict';

let count = 0;

setInterval(() => {
  count++;
  console.log('Count is "', count, '"');
  if (count === 5) {
    process.exit(1);
  }
}, 1000);

process.on('exit', (code) => {
  console.log('Exiting with code : ', code);
});
