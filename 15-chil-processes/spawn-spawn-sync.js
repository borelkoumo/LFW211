'use strict'

const { spawnSync } = require('node:child_process')
const result = spawnSync(process.execPath, ['-e', 'console.log("subprocess stdio output")'])
console.log('result', result.stdout.toString('utf8'))