const fs = require('fs')

const myStdout = fs.createWriteStream(null, { fd: 1 })
const myStdErr = fs.createWriteStream(null, { fd: 2 })

myStdout.write('stdout stream')
myStdErr.write('stderr stream')

