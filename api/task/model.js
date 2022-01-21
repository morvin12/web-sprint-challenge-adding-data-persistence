// build your `Task` model here
const db = require('../../data/dbConfig');

async function getTasks () {
    const rows = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .select('t.*', 'p.project_name', 'p.project_description'
        );
    console.log('ROWS: ', rows);

    const result = rows.map( task => {
        task.task_completed === 0 ? task.task_completed = false : task.task_completed = true;
        return task;
    });
    return result;
}

async function createTask (task) {
    const newTaskId = await db('tasks').insert(task);
    const newTask = getTaskById(newTaskId);
    return newTask;
}

async function getTaskById (id) { 
    const task = await db('tasks').where('task_id', id).first();
    task.task_completed === 0 ? task.task_completed = false : task.task_completed = true;
    return task;
}

module.exports = {
    getTasks,
    createTask,
    getTaskById,
}