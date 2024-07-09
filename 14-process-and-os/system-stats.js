'use strict'
const os = require('os')

setInterval(() => {
  console.log('system uptime = ', os.uptime())
  console.log('free memory = ', os.freemem())
  console.log('total memory = ', os.totalmem())
  console.log()
}, 1000);