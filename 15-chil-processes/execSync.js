const { execSync } = require('node:child_process')

const output = execSync(`node -e "console.log('hello')"`)
execSync(`node -e "console.log('hello')" > out.txt`)
console.log(output.toString())