const tap = require('tap')
const req = require('../req-prom')

tap.test('handles network errors', async (tap) => {
  await tap.rejects(()=> req('http://error.com'))
})

tap.test('returns correct data', async ({strictSame, ok}) => {
  const res = await req('http://example.com')
  ok(res)
  strictSame(res, Buffer.from('some data'))
})