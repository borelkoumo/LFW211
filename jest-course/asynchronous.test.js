const { expect } = require('expect')
const { callback, promises } = require('./asynchronous')

describe('Callback', () => {
  it('should test cb function', (done) => {
    callback('http://example.com', (err, data) => {
      expect(err).toBeFalsy()
      expect(data).toEqual('some data')
      done()
    })
  })
})

describe('Callback', () => {
  it('should test cb function', async () => {
    expect(promises('http://example.com')).resolves.toEqual('some data')
  })
})

describe('Async/Await', () => {
  it('should test cb function', async () => {
    const data = await promises('http://example.com')
    expect(data).toEqual('some data')

    expect(promises('http://error.com')).rejects.toBeInstanceOf(Error)
  })
})
