import format from './format.js'
import pino from 'pino'
import url from 'url'

const isMain = url.fileURLToPath(import.meta.url) === process.argv[1]
if (isMain) {
  const logger = pino();
  logger.info(format.upper('my package started'))
  process.stdin.resume()
}

export default (str) => { return format.upper(str).split('').reverse().join('') }