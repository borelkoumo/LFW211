'use strict'

const { spawn } = require('child_process')
const { IS_CHILD } = process.env

if (IS_CHILD) {
  console.log('Child cwd', process.cwd())
  console.log('Child env', process.env)
} else {
  console.log('Parent cwd', process.cwd())
  const sp = spawn(process.execPath, [__filename], {
    env: { IS_CHILD: true },
    cwd: '/'
  })
  sp.stdout.pipe(process.stdout)
}