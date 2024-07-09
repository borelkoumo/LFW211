'use strict'

const { exec } = require('child_process')

exec(`${process.execPath} -e "console.log('A');console.error('B');throw new Error('error')"`, (err, stdout, stderr) => {
  console.log('err ', err)
  console.log('stdout ', stdout.toString())
  console.log('stderr ', stderr.toString())
})