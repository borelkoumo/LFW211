'use strict'
// console.log(process.stdin.isTTY ? 'terminal' : 'piped to')
process.stderr.write(process.stdin.isTTY ? 'terminal' : 'piped to')

const { Transform } = require('node:stream')

const upperCaseStream = new Transform({
  transform (chunk, enc, cb) {
    try {
      const t = chunk.toString().toUpperCase()
      cb(null, t)
    } catch (error) {
      cb(error)
    }
  }
})

process.stdin
  .pipe(upperCaseStream)
  .pipe(process.stdout)