'use strict'

const { execFile } = require('child_process')
const child = execFile('node', ['-e', `console.log('child pid in1: ', process.pid);setTimeout(()=> {console.log('child pid in2: ', process.pid)}, 1000);`], (err, stdout, stderr) => {
  console.log('current pid: ', process.pid)
  console.log('child pid ext: ', child.pid)
  if (err) {
    throw err
  }
  console.log(stdout)
})
