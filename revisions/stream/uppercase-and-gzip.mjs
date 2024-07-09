import { createGzip, createGunzip } from "zlib";
import { Transform, pipeline } from "stream";

const upperCaseIt = function () {
  return new Transform({
    defaultEncoding: 'utf-8',
    transform (chunk, enc, next) {
      this.push(chunk.toString().toUpperCase())
      next()
    }
  })
}

pipeline(
  process.stdin,
  createGunzip(),
  upperCaseIt(),
  createGzip(),
  process.stdout,
  (err) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
  }
)