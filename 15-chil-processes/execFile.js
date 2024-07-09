// const { execFile } = require('node:child_process')
// const child = execFile('node', ['--version'], (error, stdout, stderr) => {
//   if (error) {
//     throw error
//   }
//   console.log(stdout)
// })


// const { execFile } = require('node:child_process')
// // const child = execFile('node', ['-p', "const rand = crypto.randomBytes(10);console.log('rand = ', rand, '\t');"], (error, stdout, stderr) => {
// const child = execFile('node', ['-p', "const rand = crypto.randomBytes(10);require('fs').writeFileSync(require('path').join(__dirname, 'out.txt'), rand);rand"], (error, stdout, stderr) => {
//   if (error) {
//     throw error
//   }
//   console.log('stdout = ', stdout)
//   console.log('typeof stdout = ', typeof stdout)
//   // console.log('stdout = ', Buffer.from(stdout).toString('utf8'))
//   console.log('stdout to string = ', stdout.toString('utf8'))
// })

const { execFile } = require('node:child_process')
const child = execFile('node', ['-p', "const rand = crypto.randomBytes(10); const out = {rand, utf8:rand.toString('utf8')}; out"], (error, stdout, stderr) => {
  if (error) {
    throw error
  }
  console.log('Stdout = ', stdout)
  console.log('Typeof = ', typeof stdout)
})