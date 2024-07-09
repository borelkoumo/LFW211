'use strict'

const { spawnSync } = require('node:child_process')

const result = spawnSync(
  process.execPath,
  ['-e', `console.log('subprocess stdout output'); throw new Error('e')`]
)

console.dir(result)