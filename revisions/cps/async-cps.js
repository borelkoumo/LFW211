function addCpsAsync (a, b, cb) {
  setTimeout(() => {
    cb(a, b)
  }, 100);
}

console.log('before')
addCpsAsync(1, 1, (result) => console.log('result ', result))
console.log('after')