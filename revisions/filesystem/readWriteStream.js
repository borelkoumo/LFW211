const { pipeline, Transform } = require('stream')
const { createReadStream, createWriteStream } = require('fs')
const { join } = require('path')

function upperCaseStream () {
  return new Transform({
    transform (chunk, enc, next) {
      console.log(chunk)
      this.push(chunk.toString().toUpperCase())
      next()
    }
  })
}

pipeline(
  createReadStream(__filename),
  upperCaseStream(),
  createWriteStream(join(__dirname, 'outStream.txt')),
  (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Finished writing')
  }

)