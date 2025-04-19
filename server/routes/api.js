const express = require('express')
const router = express.Router()

// database models
const Projects = require('../models/projects')
const ContactMessage = require('../models/contactMessage')

router.get('/admin/overview', async (req, res) => {
    try {
        const totalProjects = await Projects.countDocuments()
        const totalContactMessages = await ContactMessage.countDocuments()

        res.status(200).json({
            totalProjects,
            totalContactMessages  
        })
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch admin overview' })
    }
})

module.exports = router
