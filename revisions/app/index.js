if (process.env.NODE_ENV !== 'production') {
  Error.stackTraceLimit = Infinity
}
const express = require('express')
const app = express()
const routes = require('./routes')

app.use(routes)

app.listen(3000)