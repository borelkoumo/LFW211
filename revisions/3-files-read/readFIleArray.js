const { readFile } = require('fs')

const files = Array.from(Array(5)).fill(__filename)
const contents = []

const print = (err, content) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(content.toString())
}

function read (files, index) {
  readFile(files[index], (err, data) => {
    if (err) { print(err) }
    contents.push(data)
    index++
    if (index >= files.length) {
      print(null, Buffer.concat(contents))
      return
    }
    read(files, index)
  })
}

read(files, 0)