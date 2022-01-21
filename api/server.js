// build your server here and require it from index.js
const express = require('express')
const projectsRouter = require('./project/router')
const resourceRouter = require('./resource/router')

const server = express()
server.use(express.json())

server.get('/', (req, res) => {
    res.send('<h1>It Worked!!</h1>')
})

server.use('/api/projects', projectsRouter)
server.use('/api/resource', resourceRouter)

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
    });
});

module.exports = server;
