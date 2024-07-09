const timer = setTimeout(() => {
  console.log('>> This will not be logged')
  timer.refresh()
}, 1000);

//console.log(timeout)
// setImmediate(() => { clearTimeout(timeout) })