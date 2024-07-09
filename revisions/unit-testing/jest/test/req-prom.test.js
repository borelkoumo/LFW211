'use strict'
const {expect} = require('@jest/globals')
const reqProm = require('../../common/req-prom')

describe('Asynchronous request', () => {
  it('should fail if wrong url', async () => {
    const prom = reqProm('http://error.com')
    expect(prom).rejects.toEqual(Error('network error'))
  })

  it('should respond with data', async () => {
    const data = await reqProm('http://example.com')
    expect(data).toBeInstanceOf(Buffer)
    expect(data.toString()).toEqual('some data')
  })
})