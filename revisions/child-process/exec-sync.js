const { execSync } = require('node:child_process')

const output = execSync(`node -e "console.log('subprocess stdout output');throw new Error('e')"`)
console.log(output.toString())