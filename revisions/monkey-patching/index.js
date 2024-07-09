require('./logger-patch')
const logger = require('./logger')

logger('Hello')
logger.customLog('Hello')

