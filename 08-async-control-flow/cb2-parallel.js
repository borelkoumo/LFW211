const {readFile} = require('fs')
const [bigFile, mediumFile, smallFile] = Array.from(Array(3)).fill(__filename)

function print (err, contents) {
  if (err) {
    console.err(err)
    return
  }
  console.log(contents.toString())
}

readFile(bigFile, print)
readFile(mediumFile, print)
readFile(smallFile, print)
