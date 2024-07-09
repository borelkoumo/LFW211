'use strict'

const { exec } = require('child_process')
exec(
  `"${process.execPath}" -e "console.log('A'); throw new Error('an error');"`,
  (err, stdout, stderr) => {
    // console.log(err)
    console.log(stdout)
    // console.log(stderr)
  }
)