const base64Encode = require('base64-encode-stream')
const { createReadStream } = require('fs')
const { Transform } = require('stream')

let size = 0
createReadStream('package.json')
  .pipe(new Transform({
    encoding:'utf8',
    transform (chunk, enc, next) {
      size += chunk.length
      // console.log('chunk is ', chunk.toString('utf8'))
      this.push(chunk.toString())
      next()
    },
    final (cb) {
      console.log('Size ', size / 1024, ' KB')
      cb()
    }
  }))
  .pipe(process.stdout)
// process.stdin.pipe(base64Encode()).pipe(process.stdout)