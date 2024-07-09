'use strict'

const { spawnSync } = require('node:child_process')

const r = spawnSync(
  process.execPath,
  [
    '-e',
    `console.error('error');console.log('hello');process.stdin.pipe(process.stdout)`
  ],
  {
    input: 'Hello input',
    stdio: ['pipe', 'inherit', 'pipe']
  }
)

console.log(r.stdout?.toString())
console.log(r.stderr.toString())