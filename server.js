const express = require('express')
const app = express()
const morgan = require('morgan')
const db =require('./utils/db')
require('dotenv').config()
const port = process.env.PORT
//Database
db()
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