'use strict'

const { spawnSync } = require('node:child_process')

// const result = spawnSync(process.execPath, ['-e', `process.exit(1)`])
const result = spawnSync(process.execPath, ['-e', `process.stdout.write('hellohelli');process.exitCode = 1`])

console.log(result.stdout.toString('utf8'))
console.log(result.stderr.toString('utf8'))