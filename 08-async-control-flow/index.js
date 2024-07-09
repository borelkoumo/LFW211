const setInt = require('./timers-custom-setInterval')

setInt(() => {
  const a = Math.random()
  const b = Math.random()
  console.log(a + b)
}, 1000)