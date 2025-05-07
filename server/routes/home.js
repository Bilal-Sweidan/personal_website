const express = require('express')
const router = express.Router()


// database schema
const User = require('../models/user')
// bycrypt 
const { compare } = require('../utils/hash')

router.get('/', async (req, res) => {
    res.send('Hello World')

})


router.post('/', async (req, res) => {
})

module.exports = router
