'use strict'
const os = require('os')
console.log('Hostname = ', os.hostname())
console.log('Homedir = ', os.homedir())
console.log('Temp dir = ', os.tmpdir())
console.log('Platform = ', os.platform())
console.log('Type = ', os.type())