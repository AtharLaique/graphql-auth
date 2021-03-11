const express = require('express')
const app = express()
const morgan = require('morgan')
require('dotenv').config()
const port = process.env.PORT
//Middleware
app.use( morgan('tiny') )
//Routes
app.get('/', function (req, res) {
  res.send('Hello World')
})
//Server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})