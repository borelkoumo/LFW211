const fs = require('fs')
const { Transform } = require('stream')

process.stdin
  .pipe(new Transform({
    transform (chunk, enc, next) {
      this.push(chunk.toString().toUpperCase())
      next()
    }
  }))
  .pipe(process.stdout)