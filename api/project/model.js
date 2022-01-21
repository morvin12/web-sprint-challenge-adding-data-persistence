// build your `Project` model here
const db = require('../../data/dbConfig');

function getProjects() {
    return db("projects")
}

function getProjectById(id) {
    return db("projects").where("project_id", id).first()
}

async function createProject(newProject) {
    const [id] = await db("projects").insert(newProject)
    return getProjectById(id)
}

module.exports = {
    getProjects,
    createProject,
    getProjectById,
}
