'use strict'
const { execSync } = require('node:child_process')

const cmd = process.platform === 'win32' ? 'dir' : 'ls'
const output = execSync(cmd)
console.log(output.toString())