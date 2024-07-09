'use strict'
const { spawn } = require('node:child_process')
const child = spawn(
  process.execPath,
  [
    '-e',
    `console.error('error output');process.stdin.pipe(process.stdout)`
  ],
  { stdio: ['pipe', 'inherit', 'pipe'] }
)

child.stderr.pipe(process.stdout)
child.stdin.write('this input will become output')
child.stdin.end()