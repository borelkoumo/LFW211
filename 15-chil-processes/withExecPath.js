'use strict'

const { execSync } = require('child_process')
try {
  const output = execSync(`${process.execPath} -e "console.log('subprocess stdio output'); process.exit(1)"`)
  console.log(output.toString())
} catch (error) {
  console.error(error)
}