'use strict'
console.log('Process uptime = ', Math.floor(process.uptime()))
setTimeout(() => {
  console.log('Process uptime = ', Math.floor(process.uptime()))
}, 1000);