class Logger {
  constructor (name) {
    this.name = name
  }
  log (message) {
    console.log(`[${this.name}] ${message}`)
  }
  verbose (message) {
    this.log(`info: ${message}`)
  }
  error (message) {
    console.error(`[${this.name}] error: ${message}`)
  }
}

module.exports = Logger