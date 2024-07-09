'use strict'

const store = require('./store')

test('input should be a buffer', (done) => {
  store('hello', (err) => {
    expect(err).toStrictEqual(Error('input must be a buffer'))
    done()
  })  
})

test('should return an id of length 4', (done) => {
  store(Buffer.from('hello'), (err, data) => {
    expect(err).toBeFalsy()
    expect(data.id.length === 4).toBe(true)
    done()
  })  
})