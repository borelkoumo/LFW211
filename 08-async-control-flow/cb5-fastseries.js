const { readFile } = require('fs')
const series = require('fastseries')()
const files = Array.from(Array(3)).fill(__filename)

const print = (err, results) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(Buffer.concat(results).toString())
}

const readers = files.map((file) => (_, cb) => {
  readFile(file, (err, result) => {
    if (err) cb(err)
    else cb(null, result)
  })
})

series(null, readers, null, print)