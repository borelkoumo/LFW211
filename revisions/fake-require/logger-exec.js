const Logger = require('./logger')
const dbLogger = new Logger('DB')

dbLogger.log('message de log')
dbLogger.verbose('message de verbose')
dbLogger.error('message d\'erreur')

