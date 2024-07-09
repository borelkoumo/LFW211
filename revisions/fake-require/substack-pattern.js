const add = (a, b) => a + b

module.exports = add
module.exports.addVerbose = (a, b) => { const r = a + b; console.log(`${a}+${b}=${r}`); return r }