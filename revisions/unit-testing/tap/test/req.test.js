'use strict'

const tap = require('tap')
const req = require('../../common/req')

tap.test('handles network error', (tap) => {
  req('http://error.com', (err) => {
    tap.strictSame(err, Error('network error'))
    tap.end()
  })
})

tap.test('responds with data', (tap) => {
  req('http://example.com', (err, data) => {
    tap.type(data, Buffer)
    tap.strictSame(data, Buffer.from('some data'))
    tap.end()
  })
})

