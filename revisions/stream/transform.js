'use strict'
const { Transform } = require('stream')
async function upper (str) {
  return str.toUpperCase()
}
const createTransformStream = () => {
  return new Transform({
    objectMode:true,
    async transform (chunk, enc, next) {
      next(null, await upper(chunk))
    }
  })
}

const transform = createTransformStream()
transform.on('data', (data) => {
  console.log('got data: ', data)
})
transform.write('hello\n')
transform.write('world\n')
transform.end('\n')