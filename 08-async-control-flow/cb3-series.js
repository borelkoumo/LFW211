const { readFile } = require('fs')
const [b, m, s] = Array.from(Array(3)).fill(__filename)

function print (err, contents) {
  if (err) {
    console.err(err)
    return
  }
  console.log(contents)
}

readFile(b, (err, contents) => {
  print(err, contents)
  readFile(m, (err, contents) => {
    print(err, contents)
    readFile(s, (err, contents) => {
      print(err, contents)
    })
  })
})