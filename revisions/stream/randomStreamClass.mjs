import { Readable } from 'stream'

export class RandomStream extends Readable {
  constructor (options) {
    super(options)
    this.emittedBytes = 0
  }
  _read (size) {
    const chunk = this._createRandomString(size)
    this.push(chunk, 'utf8')
    this.emittedBytes += chunk.length
    if (Math.random() > 0.7) {
      this.push(null)
    }
  }
  _createRandomString (size) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = '';
    const charactersLength = chars.length;
    for (let i = 0; i < size; i++) {
      result += chars[Math.floor(Math.random() * charactersLength)]
    }
    return result;
  }
}


const randomStr = new RandomStream()
randomStr
  .on('data', (chunk) => {
    console.log(`Chunk received (${chunk.length} bytes): ${chunk.toString()}`)
  })
  .on('end', () => {
    console.log(`Produced ${randomStr.emittedBytes} bytes of random data`)
  })