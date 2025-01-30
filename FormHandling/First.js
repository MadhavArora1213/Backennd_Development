const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
});

app.get('/', function (req, res,next) {
 return next(new Error('Not found'))
})

// Error handling 
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000)