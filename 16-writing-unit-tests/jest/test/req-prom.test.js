'use strict'
const req = require('../req-prom')

test('should fail when invalid url', async () => {
  await expect(req('http://error.com')).rejects.toStrictEqual(Error('invalid url'));
})

test('should return correct data', async () => {
  await expect(req('http://example.com')).resolves.toStrictEqual(Buffer.from('some data'));
})