export default {
  upper: (str) => {
    if (typeof str === 'symbol') str = str.toString()
    str += ''
    return str.toUpperCase()
  }
}