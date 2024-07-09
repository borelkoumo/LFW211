const { readFile } = require('fs')
const files = Array.from(Array(3)).fill(__filename)
const data = []
const print = (err, contents) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(contents.toString())
}

const readFileAtIndex = (i) => {
  if (i < files.length) {
    readFile(files[i], (err, contents) => {
      if (err) print(err)
      else data.push(contents)
      readFileAtIndex(i+1)
    })   
  } else {
    print(null, Buffer.concat(data))
  }
}

readFileAtIndex(0)
