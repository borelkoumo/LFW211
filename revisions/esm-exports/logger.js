// export a function as  'log'
export function log (message) {
  console.log(message)
}

// Export a const as DEFAULT_LEVEL
export const DEFAULT_LEVEL = 'info'


// Export an object as LEVELS
export const LEVELS = {
  error: 0,
  debug: 1,
  warn: 2,
  data: 3,
  info: 4,
  verbose: 5
}

// Export a class as 'Logger'
export default class Logger {
  constructor (name) {
    this.name = name
  }
  log (message) {
    console.log(`${this.name}: ${message}`)
  }
}