//Server is the soul of this project (Funny)
const express = require('express')
const app = express() //Object extracted
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./Routes/api').route)

//Setting up the server
app.listen(2345,()=>{
    console.log("The serve has successfully created at " + "http://localhost:2345")
})