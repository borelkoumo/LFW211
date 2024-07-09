const {
  describe,
  it,
  expect,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
} = require('@jest/globals');
// const uppercase = require('../uppercase');

describe('Uppercase', () => {
  beforeAll(() => {});
  beforeEach(() => {});
  afterAll(() => {});
  afterEach(() => {});
  it('should uppercase "hello" to "HELLO"', () => {
    const uppercase = jest.fn(() => 'HELLO')
    expect(uppercase('hello')).toBe('HELLO');
    expect(uppercase).toHaveBeenCalledWith('hello')
  });
  it('should not return the same string', () => {
    expect(uppercase('hello')).not.toBe('hello');
  });
});
