const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true }, //descrição da tarefa do todo
    done: { type: Boolean, required: true, default: false }, //a tarefa está ou não concluída
    createdAt: { type: Date, default: Date.now } //data da tarefa
})

module.exports = restful.model('Todo', todoSchema)