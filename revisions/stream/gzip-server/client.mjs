import http from 'http'
import zlib from 'zlib'
import fs, { createReadStream } from 'fs'
import path from 'path'
import crypto from 'crypto'

const filename = process.argv[2]
const serverHost = process.argv[3]

const iv = crypto.randomBytes(16)
const secret = Buffer.from(process.argv[4], 'hex')

const httpRequestOptions = {
  hostname: serverHost,
  port: 3000,
  path: '/',
  method: 'PUT',
  headers: {
    'Content-Type': 'application/octet-stream',
    'Content-Encoding': 'gzip',
    'X-Filename': path.basename(filename),
    'X-Initialisation-Vector': iv.toString('hex')
  }
}
const req = http.request(httpRequestOptions, (res) => {
  console.log(`Server response: ${res.statusCode}`)
})
fs.createReadStream(filename)
  .pipe(crypto.createCipheriv('aes192', secret, iv))
  .pipe(zlib.createGzip())
  .pipe(req)
  .on('finish', () => {
    console.log('File successfully sent')
  })