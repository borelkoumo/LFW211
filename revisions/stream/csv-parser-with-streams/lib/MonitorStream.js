import { PassThrough } from 'stream'

export default class Monitor extends PassThrough {
  constructor (options = {}) {
    super({ ...options, objectMode: true })
    this.countries = new Set()
  }
  _transform (chunk, enc, cb) {
    this.countries.add(chunk.country)
    this.push(chunk)
    cb()
  }
  _flush (cb) {
    console.log(`Countries are : ${Array.from(this.countries)}`)
    cb()
  }
} 