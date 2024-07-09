if (process.env.NODE_ENV !== 'production') {
  require('longjohn')
}

const express = require('express')
const app = express()
const routes = require('./routes')

app.use(routes)

app.listen(3000)