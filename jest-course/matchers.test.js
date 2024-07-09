const { expect } = require('@jest/globals')

describe('testing toBe', () => {
  it('should add', () => {
    expect(2 + 2).toBe(4)
  })

  it('should assign object', () => {
    const data = { one: 1 }
    data['two'] = 2
    expect(data).toStrictEqual({ one: 1, two: 2 })
  })

  it('null is falsy', () => {
    const data = null
    expect(data).toBeFalsy()
  })
  it('1 is truthy', () => {
    const data = 1
    expect(data).toBeTruthy()
  })
  it('to throw', () => {
    function increment (a) {
      if (typeof a !== 'number') {
        throw new Error('should be number')
      }
      return a + 1
    }
    expect(() => increment('1')).toThrow(Error('should be number'))
  })
})