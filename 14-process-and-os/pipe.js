'use strict'
console.log('Pipelines')
const { Transform } = require('node:stream')

const upperCaseStream = new Transform({
  decodeStrings: false,
  encoding: "hex",
  transform (chunk, enc, cb) {
    console.log('chunk = ', chunk)
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