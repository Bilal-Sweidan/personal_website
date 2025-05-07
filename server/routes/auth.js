const express = require('express')
const router = express.Router()
// jwt
const jwt = require('jsonwebtoken')


// database schema
const User = require('../models/user')
// bycrypt 
const { compare } = require('../utils/hash')

// check auth
router.get('/current-user', async (req, res) => {
    try {
        const token = req.cookies.token
        console.log("cookies current-user : ", token);
        if (!token) {
            return res.status(401).json({ msg: "unauthorized" })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.id)
        return res.status(200).json({ user })
    } catch (err) {
        return res.status(401).json({ msg: "unauthorized" })
    }
})
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(email, password);
        const admin = await User.findOne({ email })
        if (!admin) {
            res.status(401).json({ msg: "check your data" })
        }
        if (compare(password, admin.password)) {
            const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
            res.cookie('token', token, {
                secure: true, // required if using HTTPS (Render forces HTTPS)
                sameSite: 'None', // IMPORTANT if frontend is on a different domain
                maxAge: 1000 * 60 * 60 * 24,
            })
            req.admin = admin
            res.status(200).json({ msg: "login success", user: admin })
        } else {
            res.status(401).json({ msg: "check your data" })
        }
    } catch (err) {
        // console.log(err.message)
        res.status(500).json({ msg: err.message })
    }
    console.log("cookies login : ", req.cookies);
})

// logout
router.post('/logout', async (req, res) => {
    try {
        // res.clearCookie('token')
        console.log("logout : ", true);
        res.clearCookie('token').status(200).json({ msg: "logout success" })
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }
})

module.exports = router