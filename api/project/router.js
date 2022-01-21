// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Projects = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.getProjects()
        res.json(projects) 
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newProject = await Projects.createProjects(req.body)
        res.json(newProject)
    } catch (err) {
        next(err)
    }
})

module.exports = router
