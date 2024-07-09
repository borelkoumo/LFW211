const { readFile } = require('fs')
const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)

const print = (err, contents) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(contents.toString())
}

readFile(smallFile, (err, data) => {
  print(err, Buffer.concat([Buffer.from('small file\n'), data]))
  readFile(mediumFile, (err, data) => {
    print(err, Buffer.concat([Buffer.from('medium file\n'), data]))
    readFile(bigFile, (err, data) => {
      print(err, Buffer.concat([Buffer.from('large file\n'), data]))
    })
  })
})