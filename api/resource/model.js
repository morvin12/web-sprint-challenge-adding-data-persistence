// build your `Resource` model here
const db = require('../../data/dbConfig');

async function getResources () {
    return await db('resources');
}

async function createResource (resource) {
    const newResourceId = await db('resources').insert(resource);
    const newResource = getResourceById(newResourceId);
    return newResource;
}

async function getResourceById (id) {
    return await db('resources').where('resource_id', id).first();
}

module.exports = {
    getResources,
    createResource,
    getResourceById,
}
