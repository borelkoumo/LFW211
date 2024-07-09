'use strict'

const { spawn } = require('node:child_process')

const sp = spawn(
  process.execPath,
  ['-e', `console.log('subprocess stdio output')`], 
)

sp.stdout.on('data', (chunk) => {
  console.log('chunk ', chunk)
})

sp.on('close', (status) => {
  console.log('exit status was', status)
})