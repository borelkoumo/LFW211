'use strict'
const { expect } = require('@jest/globals')
const req = require('../../common/req')

describe('Add feature', () => {
  it('should fail if network error', (done) => {
    req('http://error.com', (err, data) => {
      expect(err).toStrictEqual(Error('network error'))
      done()
    })
  })

  it('should return data when expected', (done) => {
    req('http://example.com', (err, data) => {
      expect(err).toBe(null)
      expect(data).toBeInstanceOf(Buffer)
      expect(data.toString()).toEqual('some data')
      done()
    })
  })
})


