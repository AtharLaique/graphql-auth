const express = require('express')
const app = express()
const morgan = require('morgan')

app.use( morgan('tiny'))
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000,()=>{
    console.log(`Server is running on port 3000`)
})