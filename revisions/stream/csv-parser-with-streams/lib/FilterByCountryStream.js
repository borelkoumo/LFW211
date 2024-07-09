import { Transform } from 'stream'

export default class FilterByCountry extends Transform {
  constructor (country, options = {}) {
    super({ ...options, objectMode: true })
    this.country = country
  }
  _transform (chunk, enc, cb) {
    if (chunk.country === this.country) {
      this.push(chunk)
    }
    cb()
  }
  _flush (cb) {
    cb()
  }
}