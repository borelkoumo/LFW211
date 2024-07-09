import { Readable } from 'stream'

let emittedBytes = 0

function createRandomString (size=5) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = '';
  const charactersLength = chars.length;
  for (let i = 0; i < size; i++) {
    result += chars[Math.floor(Math.random() * charactersLength)]
  }
  return result;
}

const randomStr = new Readable({
  read (size) {
    const chunk = createRandomString(size)
    this.push(chunk, 'utf8')
    emittedBytes += chunk.length
    const rand = Math.random()
    console.log(rand)
    if (rand > 0.4) {
      this.push(null)
    }
  },
  highWaterMark: 1024
})
randomStr
  .on('data', (chunk) => {
    console.log(`Chunk received (${chunk.length} bytes): ${chunk.toString()}\n`)
  })
  .on('end', () => {
    console.log(`Produced ${emittedBytes} bytes of random data`)
  })