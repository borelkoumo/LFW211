import { Transform } from 'stream'

export default class AggregateProfits extends Transform {
  constructor (options = {}) {
    super({ ...options, objectMode: true })
    this.sum = 0
  }
  _transform (chunk, enc, cb) {
    if (chunk.profit) {
      this.sum += Number.parseFloat(chunk.profit, 10)
    }
    cb()
  }
  _flush (cb) {
    this.push(`${this.sum}`)
    cb()
  }
}