module.exports = function (cb, interval) {
  const timer = setTimeout(() => {
    cb()
    timer.refresh()
  }, interval)
}