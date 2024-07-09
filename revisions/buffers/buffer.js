
const json = JSON.stringify(Buffer.from('👀', 'utf8'))
const parsed = JSON.parse(json)
console.log(parsed)
console.log(Buffer.from(parsed.data))