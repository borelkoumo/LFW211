'use strict'

const stats = () => {
  const uptime = process.uptime()
  const { user, system } = process.cpuUsage()
  console.log(uptime, user, system, (user+system)/1000000)
}

setTimeout(() => {
  stats()
  const now = Date.now()
  while (Date.now() - now < 5000) { }
  stats()
}, 500);

stats()