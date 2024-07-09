'use strict'
const { expect } = require('@jest/globals')
const add = require('../../common/add')

describe('Arguments validation', () => {
  it('should throw if invalid argument', () => {
    expect(() => add(5, '5')).toThrowError(Error('input must be number'))
    expect(() => add(5, { valueOf () { return 5 } })).toThrowError(Error('input must be number'))
  })
})

describe('Make the right computations', () => {
  it('should add to numbers', () => {
    expect(add(2,2)).toEqual(4)
    expect(add(2,-2)).toEqual(0)
  })
})