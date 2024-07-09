'use strict'
const store = require('../store')
const { expect } = require('@jest/globals')

describe('Store method', () => {
  it('should reject if input is not a buffer', async () => {
    expect(store('hello')).rejects.toEqual(Error('input must be a buffer'))
  })

  it('should return an id of size 4', async () => {
    const data = await store(Buffer.from('hello world'))
    console.log(data.id.length)
    expect(data).toBeTruthy()
    expect(typeof data.id).toEqual('string')
    expect(data.id.length).toEqual(4)
  })
})