'use strict'
const { spawn } = require('node:child_process')

process.env.A_VAR_WE = 'JUST SET'

const sp = spawn('node', ['-p', ['process.env']])
sp.stdout.pipe(process.stdout)