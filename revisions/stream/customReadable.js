'use strict'
const { Readable } = require('stream')
const createReadableStream = () => {
  const data = ['some', 'data', 'to', 'read']
  return new Readable({
    objectMode: true,
    // encoding: 'utf8',
    read () {
      if (data.length === 0) {
        this.push(null)
      }
      else {
        this.push(data.shift())
      }
    }
  })
}
const r = createReadableStream()
r.on('data', (data) => { console.log('got data', data) })
r.on('end', () => { console.log('finished reading') })