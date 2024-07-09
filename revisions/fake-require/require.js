function fakeRequire (path) {
  const module = {
    exports: {}
  };
  const fs = require('fs')
  const wrappedSrc =
    `(function (module, exports, require) {
        ${fs.readFileSync(path, 'utf8')}
     })(module, module.exports, require)
    `
  eval(wrappedSrc);
  return module.exports
}

const add = fakeRequire('./add.js')
console.log(add)
console.log(add(1, 1))

