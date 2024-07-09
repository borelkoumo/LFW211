'use strict'
const store = require('../store')
const { expect } = require('@jest/globals')

describe('Store', () => {
  it('should take buffer as input', (done) => {
    store('hello', (err, data) => {
      expect(err).toStrictEqual(Error('input must be a buffer'))
      done()
    })
  })

  it('should return an id of size 4', (done) => {
    store(Buffer.from('hello world'), (err, data) => {
      expect(err).toBe(null)
      expect(data).toBeTruthy()
      expect(typeof data.id).toEqual('string')
      expect(data.id.length === 4).toBe(true)
      done()
    })
  })
})