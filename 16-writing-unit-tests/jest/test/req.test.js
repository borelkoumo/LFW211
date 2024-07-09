'use strict'

const req = require('../req')

test('should fail if invalid url', done => {
  req('http://error.com', (error, data) => {
    expect(error).toBeInstanceOf(Error)
    done()
  })
})

test('should return data when called', done => {
  req('http://example.com', (error, data) => {
    expect(error === null).toBe(true)
    expect(Buffer.isBuffer(data)).toBeTruthy()
    expect(data).toStrictEqual(Buffer.from('some data'))
    done()
  })
})