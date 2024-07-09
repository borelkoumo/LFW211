'use strict'

const tap = require('tap')
const reqProm = require('../../common/req-prom')

tap.test('handles network error', async (tap) => {
  tap.rejects(reqProm('http://error.com'))
})


