const { spawn } = require('node:child_process')
const ps = spawn('ps', ['ax'])
const grep = spawn('grep', ['ssh'])

ps.stdout.on('data', (chunk) => {
  grep.stdin.write(chunk)
})

ps.stderr.on('data', (data) => {
  console.error(`ps stderr: ${data}`)
})

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps process exited with code ${code}`)
  }
  grep.stdin.end()
})

grep.stdout.on('data', (data) => {
  console.log(data.toString())
})

grep.stderr.on('data', (data) => {
  console.error(`grep stderr: ${data}`)
})

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep process exited with code ${code}`)
  }
})