import http from 'http'
import zlib from 'zlib'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

// Generate secret
const secret = crypto.randomBytes(24)
console.log('Generated Secret: ', secret.toString('hex'))

const server = http.createServer((req, res) => {
  const filename = path.basename(req.headers['x-filename'])
  const destFilename = path.join('uploads', filename)
  const iv = Buffer.from(req.headers['x-initialisation-vector'], 'hex')
  console.log(`About to upload file ${filename}`)
  req
    .pipe(zlib.createGunzip())
    .pipe(crypto.createDecipheriv('aes192', secret, iv))
    .pipe(fs.createWriteStream(destFilename))
    .on('finish', () => {
      res.writeHead(201, { 'Content-Type': 'text/plain' })
      res.end('OK\n')
      console.log(`File saved under: ${destFilename}`)
    })
})

server.listen(3000, () => console.log('Listening on http://localhost:3000'))