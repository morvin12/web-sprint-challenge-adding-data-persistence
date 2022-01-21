// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const Tasks = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.getTasks()
        res.json(tasks) 
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newTask = await Tasks.createTask(req.body)
        res.json(newTask)
    } catch (err) {
        next(err)
    }
})

module.exports = router
