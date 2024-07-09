// 'use strict';
// const { spawnSync } = require('child_process');

// function answer(command) {
//   const result = spawnSync(command, [], {
//     cwd: require('path').join(__dirname, 'sandbox'),
//   });
//   console.log(result.stdout.toString())
// }

// answer(process.argv[2])
'use strict';
const { execSync } = require('child_process');

function answer(command) {
  const result = execSync(command, {
    cwd: require('path').join(__dirname, 'sandbox'),
    encoding: 'utf8',
  });
  console.log(result);
}

answer(process.argv[2]);
