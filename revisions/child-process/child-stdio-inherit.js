'use strict'
const { spawn } = require('node:child_process')
const sp = spawn(
  process.execPath,
  ['-e', `console.error('err output');process.stdin.pipe(process.stdout);`],
  {
    stdio: ['pipe', 'inherit', 'pipe']
  }
)

sp.stderr.pipe(process.stdout)
sp.stdin.write('this input will become output\n')
sp.stdin.end()