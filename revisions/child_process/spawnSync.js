'use strict'

const { spawnSync } = require('child_process')
const result = spawnSync(`ls`, ['-l', '/usr/bin'])
console.log(result.stdout.toString())