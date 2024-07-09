'use strict'

const os = require('os')

console.log('Hostname ', os.hostname())
console.log('Homedir ', os.homedir())
console.log('Tmp dir = ', os.tmpdir())
console.log('Platform = ', os.platform())
console.log('Type = ', os.type())

setTimeout(() => {
  console.log('System uptime ', os.uptime())
  console.log('System freemem ', os.freemem())
  console.log('System totalmeme', os.totalmem())
}, 1000);