const { expect, jest } = require('@jest/globals')

it('should mock a fn', () => {
  const mock = jest.fn((x) => x + 42)
  expect(mock(1)).toBe(43)
  expect(mock).toHaveBeenCalledWith(1)
})

it('should spy a fn', () => {
  const video = {
    play (url) {
      console.log('playing video with url ', url)
      return true
    }
  }

  const spy = jest.spyOn(video, 'play')
  video.play()
  expect(spy).toHaveBeenCalled()
  // expect(spy).toBe(true)
})