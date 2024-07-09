import * as loggerModule from './logger.js'
import { log } from './logger.js'
import MyLogger from './logger.js'

log('Hello world')
loggerModule.log(loggerModule)
const myLogger = new MyLogger('DB')
myLogger.log('Helooooo')
