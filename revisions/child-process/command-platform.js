const { execSync } = require('node:child_process')

const cmd = process.platform === 'win32' ? 'dir' : 'ls'

const dir = execSync(cmd)

console.log(dir.toString())