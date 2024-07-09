import { Writable } from 'stream'
import { promises as fs } from 'fs'
import { dirname } from 'path'

export class ToFileStream extends Writable {
  constructor (options) {
    super({ ...options, objectMode: true })
  }
  async _write (chunk, enc, cb) {
    await fs.writeFile(chunk.filename, chunk.content)
    cb()
  }
}

const tfs = new ToFileStream()
tfs.write({filename:'en.txt', content:'Hello world'})
tfs.write({ filename: 'fr.txt', content: 'BOnjour le monde' })
tfs.end(()=> console.log('Files created!'))