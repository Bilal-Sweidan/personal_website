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
        res.status(200).json(projects)
    } catch (error) {
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



module.exports = router
