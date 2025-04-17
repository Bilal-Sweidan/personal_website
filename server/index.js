const express = require('express')

const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const env = require('dotenv').config({path : '../.env'})
// app config
const app = express()
app.use(express.json())
app.use(express.urlencoded())

// import routes
const home = require('./routes/home')
// routes
app.use('/',home)




// Connect to MongoDB first
app.listen(process.env.PORT,(err) => {
    if(err) console.log(err)
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log(err)
    })
})