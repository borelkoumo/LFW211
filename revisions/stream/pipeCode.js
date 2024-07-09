const { createServer } = require('http')
const { createReadStream } = require('fs')

const server = createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/octet-stream',
  })
  createReadStream(__filename)
    .pipe(res)
})

server.listen(3000)