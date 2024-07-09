import { Transform } from "stream";
let tail = ''

function createSearchAndReplaceStream (searchStr, replaceStr) {
  return new Transform({
    defaultEncoding:'utf8',
    transform (chunk, enc, next) {
      const output = (tail + chunk).replaceAll(searchStr, replaceStr)
      tail = output.slice(-replaceStr.length)
      this.push(output.slice(0, -replaceStr.length))
      next()
    },
    flush (next) {
      this.push(tail)
      tail = ''
      next()
    }
  })
}

const searchAndReplace = createSearchAndReplaceStream('World', 'Node.js')
searchAndReplace.on('data', (chunk) => process.stdout.write(chunk.toString())) // We can use console.log also
searchAndReplace.write('Hello W')
searchAndReplace.write('orld! Hope you are fine. I love World. It is bae. Wor')
searchAndReplace.write('ld is sweet')
searchAndReplace.end()