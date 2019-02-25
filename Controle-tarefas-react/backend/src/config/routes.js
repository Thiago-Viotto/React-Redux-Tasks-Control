const express = require('express')

module.exports = function(server){

    //API Routes
    const router = express.Router()

    //middleware que chama o router sempre que /api é digitado
    server.use('/api',router) 

    //TODO Routes
    const todoService = require('../api/todo/todoService')

    //registra todas as urls do TODO
    //Todo.methods(['get', 'post', 'put', 'delete'])
    todoService.register(router,'/todos')
}

