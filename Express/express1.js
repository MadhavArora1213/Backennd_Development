const express = require('express')
const app = express()

// Middlewares
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
});

// Routes 

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)