// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const Resource = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getResources()
        res.json(resources) 
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newresource = await Resource.createResource(req.body)
        res.json(newresource)
    } catch (err) {
        next(err)
    }
})

module.exports = router
