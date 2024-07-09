const logger = require('./logger')
logger.customLog = (message) => {
  console.log(`custom log: ${message}`)
}