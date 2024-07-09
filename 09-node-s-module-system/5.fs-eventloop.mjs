import fs from 'node:fs'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url)

setTimeout(() => {
  console.log('in setTimeout()')
}, 100);

setImmediate(() => {
  console.log('in setImmediate()')
})

process.nextTick(() => {
  console.log('in process.nextTick()')
})

console.log('A')
console.log('B')

// setTimeout(() => {
//   console.log('in setTimeout() 2')
// }, 0);

fs.readFile(__filename, (err, data) => {
  if (err) {
    console.error(err)
  } else {
    console.log('in fs.readFile()')
  }
})

console.log('C')