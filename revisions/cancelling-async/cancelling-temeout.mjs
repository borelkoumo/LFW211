import { setTimeout } from "timers/promises";

const timeout = setTimeout(1000, 'will be logged')

console.log('hello out')

setImmediate(() => {
  console.log('hello')
  clearTimeout(timeout)
})

console.log(await timeout)