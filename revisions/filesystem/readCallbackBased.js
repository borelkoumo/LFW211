'use strict'

const { readFile } = require('fs')
readFile(__filename, { encoding: 'utf8' }, (err, content) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(content)
})