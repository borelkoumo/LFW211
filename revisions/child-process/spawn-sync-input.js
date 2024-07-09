'use strict'
const { spawnSync } = require('node:child_process')

spawnSync(
  process.execPath,
  ['-e', 'console.error("error output"); process.stdin.pipe(process.stdout);'],
  {
    input: 'This input will become output\n',
    stdio: ['pipe', 'inherit', 'ignore']
  }
)