'use strict'
const { exec } = require('node:child_process')

exec(
  `${process.execPath} -e "console.log('A');"`,
  (err, stdout, stderr) => {
    console.log(err)
    console.log(stdout)
  }
)