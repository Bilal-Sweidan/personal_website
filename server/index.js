const express = require('express')

const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const env = require('dotenv').config()
// app config
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
app.use(session({
    secret: 'asdjlkjqweurpoucxv1234512345',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(cors({
    origin : ['http://localhost:5173',"https://bilal-sweidan.onrender.com"],
    credentials: true
}))
// import routes
const home = require('./routes/home')
const api = require('./routes/api')
const auth = require('./routes/auth')
// get access to upload folder
app.use('/uploads', express.static('uploads'))
// routes
app.use('/',home)
app.use("/api",api)
app.use('/auth',auth)


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
