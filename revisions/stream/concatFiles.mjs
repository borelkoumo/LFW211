import { createReadStream, createWriteStream } from 'fs'
import { Readable, Transform } from "stream";

export function concatFiles (dest, files) {
  return new Promise((resolve, reject) => {
    const destStream = createWriteStream(dest)
    Readable.from(files)
      .pipe(new Transform({
        objectMode: true,
        transform (filename, enc, next) {
          const src = createReadStream(filename)
          src.pipe(destStream, { end: false })
          src.on('error', next)
          src.on('end', next)
        }
      }))
      .on('error', reject)
      .on('finish', () => {
        destStream.end()
        resolve()
      })
  })
}