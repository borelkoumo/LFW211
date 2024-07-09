'use strict'

const { IS_CHILD } = process.env

if (IS_CHILD) {
  console.log('child cwd = ', process.cwd())
  console.log('child env = ', process.env)
} else {
  const { spawn } = require('node:child_process')
  const child = spawn(process.execPath, [__filename], {
    cwd: require('path').parse(process.cwd()).root,
    env: { IS_CHILD: 1 }
  })
  console.log('parent cwd = ', process.cwd())
  child.stdout.pipe(process.stdout)
}