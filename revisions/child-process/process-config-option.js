'use strict'
const { spawn } = require('node:child_process')

process.env.A_VAR_WE = 'JUST SET'

const sp = spawn(process.execPath, ['-p', 'process.env'], { env: { execPath: process.execPath, SP_ENV_VAR: 'ENV VAR' } })
sp.stdout.pipe(process.stdout)
sp.on('error', (err) => {
  console.log('error', err)
})