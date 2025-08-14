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


// projects database model
const Project = require('../models/projects')
// multer
const upload = require('../utils/multer')
// admin authentication
const adminAuthentication = require('../midleware/adminAuthentication')

// new projects
router.post('/projects', adminAuthentication, upload.single('image'), async (req, res) => {
    console.log(req.body)
    // console.log(path.join(__dirname,'../','uploads'))
    try {
        const { title, description, technologies, department, liveDemo, github, status } = req.body
        const technicals = technologies.split(',')
        const image = req.file.filename
        const newProject = await Project.create({ title, description, technologies: technicals, department, image, liveDemo, github, status })
        res.status(201).json({ msg: "Project created successfully", project: newProject })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Failed to create new project' })
    }
})

// get all projects
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find()
        console.log('projects: ', projects)
        res.status(200).json(projects)
    } catch (error) {
        console.log('error: ', error)
        res.status(500).json({ error: 'Failed to fetch projects' })
    }
})

// delete project
router.delete('/projects/:id', adminAuthentication, async (req, res) => {
    try {
        const { id } = req.params
        await Project.findByIdAndDelete(id)
        res.status(200).json({ msg: 'Project deleted successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete project' })
    }
})

// update project
router.put('/projects/:id', adminAuthentication, async (req, res) => {
    try {
        const { id } = req.params
        const { title, description, liveDemo, github, status } = req.body
        const updatedProject = await Project.findByIdAndUpdate(id, { title, description, liveDemo, github, status }, { new: true })
        res.status(200).json({ msg: 'Project updated successfully', project: updatedProject })
    } catch (error) {
        res.status(500).json({ error: 'Failed to update project' })
    }
})



/* contact routes */
const { sendEmail } = require('../utils/nodemailer')
// database
const ContactMessages = require('../models/contactMessage')
router.get('/message', adminAuthentication, async (req, res) => {
    try {
        const messages = await ContactMessages.find()
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})
router.post('/message', async (req, res) => {
    const { name, email, subject, message } = req.body
    try {
        console.log(name, email, subject, message)
        const mail = await sendEmail(name, email, subject, message)
        console.log(mail.success)
        if (mail.success) {
            console.log('email has sent')
            await ContactMessages.create({ name, email, subject, message })
            return res.status(200).json({ msg: 'thanks for contact 🚀' })
        }
        return res.status(400).json({ msg: 'there is a wrong , please try again later 😢' })
    } catch (err) {
        console.log(err.message)
        res.status(500)
    }
})


/* contact info */
const ContactInfo = require('../models/contactInfo')
router.get('/contact-info', async (req, res) => {
    try {
        const data = await ContactInfo.find()
        console.log("...", data[0])
        res.status(200).json(data[0])
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ msg: err.message })
    }
})



module.exports = router
