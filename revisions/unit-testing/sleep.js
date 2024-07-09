/**
 * @param {number} millis
 * @return {Promise}
 */
function sleep (millis) {
  let start = Date.now()
  let now = Date.now()
  while (now - start < millis) {
    now = Date.now()
  }
  return true
}


function sleepOld (temps) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello world"), temps);
  })
}
function sleep (millis) {
  return new Promise((resolve) => {
    let start = Date.now()
    let now = Date.now()
    while (now - start < millis) {
      now = Date.now()
    }
    resolve(true)
  })
}

async function test () {
  console.log("start");
  const start = Date.now()
  const res = await sleep(1000);
  console.log('diff = ', Date.now() - start)
  console.log("end")
}

test()