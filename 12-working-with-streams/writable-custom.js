'use strict'
const { Writable } = require('stream')
function createWriteStream (data) {
  return new Writable({
    write (chunk, enc, next) {
      data.push(chunk)
      next()
    }
  })
}

const data = []
const writable = createWriteStream(data)
writable.on('finish', () => console.log('Finished writing = ', data))
writable.write('A\n')
writable.write('B\n')
writable.write('C\n')
writable.end('Nothing more to write')