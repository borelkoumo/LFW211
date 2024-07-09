'use strict'

const { spawn } = require('child_process')
const sp = spawn(process.execPath, ['-e', `console.error('error output'); process.stdin.on('data', (data)=> {console.log(data.toString())})`], {
  stdio: ['pipe', 'inherit', 'ignore']
})

// sp.stdout.pipe(process.stdout)
sp.stdin.write('This parent input will become output\n')
sp.stdin.end()