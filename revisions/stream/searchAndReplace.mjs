import { Transform } from "stream";
export class SearchAndReplace extends Transform {
  constructor (search, replace, options) {
    super(options)
    this.searchStr = search
    this.replaceStr = replace
    this.tail = ''
  }
  _transform (chunk, encoding, cb) {
    // console.log(`Chunk received: ${chunk.toString()}`)
    const output = (this.tail + chunk).replaceAll(this.searchStr, this.replaceStr)
    this.push(output.slice(0, -this.replaceStr.length))
    this.tail = output.slice(-this.replaceStr.length)
    cb()
  }
  _flush (cb) {
    this.push(this.tail)
    cb()
  }
}

// const searchAndReplace = new SearchAndReplace('World', 'Node.js')
// searchAndReplace.on('data', (chunk) => process.stdout.write(chunk.toString())) // We can use console.log also
// searchAndReplace.write('Hello W')
// searchAndReplace.write('orld! Hope you are fine. I love World. It is bae. Wor')
// searchAndReplace.write('ld is sweet')
// searchAndReplace.end()