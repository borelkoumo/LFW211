const fs = require('fs')
const path = require('path')

const filepath = path.join(process.cwd(), 'hello.txt')
fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
  if (err) {
    return console.log(err)
  }
  console.log('File content = ', data)
})