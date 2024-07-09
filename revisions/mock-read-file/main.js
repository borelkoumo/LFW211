import fs from 'fs'
import { mockEnable, mockDisable } from './mock-read-file.js'

mockEnable(Buffer.from('hello world'))

console.log('Hello')


fs.readFile('some-path', (err, data) => {
  if (err) {
    // console.error(err)
    process.exit(1)
  }
  console.log(data.toString())
})


// setTimeout(() => {
  fs.readFile('some-path', (err, data) => {
    if (err) {
    // console.error(err)
    process.exit(1)
  }
  console.log(data.toString())
})

setImmediate(() => {
  mockDisable()
}, 0)

console.log('mon string')
// }, 0)
