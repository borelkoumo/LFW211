import fs from 'fs'

const originalReadFile = fs.readFile
let mockedResponse = null

export function mockEnable (response) {
  console.log('call to mockEnable')
  mockedResponse = response;
  fs.readFile = mockReadFile
}

function mockReadFile (path, cb) {
  setImmediate(() => {
    console.log('call to mockReadFile returns ', mockedResponse)
    cb(null, mockedResponse)
  })
}

export function mockDisable () {
  console.log('call to mockDisable')
  fs.readFile = originalReadFile
  mockedResponse = null
}