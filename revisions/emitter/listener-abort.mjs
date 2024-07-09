import EventEmitter, { once } from "events";
let data = null
const myEE = new EventEmitter()



console.log('before setTimeout...')
setTimeout(() => {
  console.log('in setTimeout...')
  myEE.emit('data', 1, 2, 3)
}, 1000);


async function run () {
  console.log('running...')
  data = await once(myEE, 'data')
  console.log('hello', data)
}

run()