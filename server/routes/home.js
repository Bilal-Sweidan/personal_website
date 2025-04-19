const express = require('express')
const router = express.Router()


// database schema
const User = require('../models/user')
// bycrypt 
const { compare } = require('../utils/hash')

router.get('/', (req, res) => {
    res.send('Hello World')
})


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const admin = await User.findOne({email , password : compare(password)})
        if(!admin){
            res.status(401).json({msg : "check your daa"})
        }
        const token = jwt.sign({id : admin._id}, process.env.JWT_SECRET,{maxAge: 1000*60*60*24})
        res.cookie('token', token, {maxAge: 1000*60*60*24})
        res.status(200).json({msg : "login success"})
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
})

module.exports = router
