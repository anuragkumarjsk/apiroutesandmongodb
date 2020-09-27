const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
const routes = require('./route/note.route')

//bodyparser gives req.body in json
//.json and .urlencoded are the middlewares having access to req, res objects
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


//mongodb code
const Dbconf = require('./config/database.config')
const mongoose = require('mongoose')

mongoose.connect(Dbconf.url, {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
console.log('connected to db successfully')
})
.catch(()=>{
    console.log('unable to connect to db ')    
})





//attaching the routes folder
app.use('/notes',routes)
app.listen(port, ()=>{console.log('listening on '+port)})