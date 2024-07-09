const { readFile } = require('fs')

readFile(__filename, (err, contents) => {
  if (err) { console.err(err) }
  else {
    console.log(contents.toString())
  }
})