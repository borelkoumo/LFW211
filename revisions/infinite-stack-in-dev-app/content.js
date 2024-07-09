module.exports = function content (opts, c = 20) {
  return --c ? content(opts, c) : opts.ohoh
}
