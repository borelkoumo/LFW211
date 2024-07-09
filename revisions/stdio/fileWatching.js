const fs = require('fs');
const file = './hello.txt';
const assert = require('assert')

fs.watch(file, (eventType, filename) => {
  console.log(`Event type: ${eventType}`);
  if (filename) {
    assert.deepEqual()
    console.log(fs.statSync(filename));
    console.log(`Filename provided: ${filename}\n\n\n`);
  }
});
