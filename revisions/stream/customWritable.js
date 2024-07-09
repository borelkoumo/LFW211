'use strict'
const { Writable } = require('stream')
const createWriteStream = (data) => {
  return new Writable({
    objectMode:true,
    write (chunk, enc, next) {
      data.push(chunk)
      next()
    }
  })
}

const data = []
const writable = createWriteStream(data)
writable.on('finish', () => {
  console.log('finished writing')
  console.log(data)
})
writable.write('some\n')
writable.write('data\n')
writable.write(1)
writable.write('write\n')
writable.end('\n')