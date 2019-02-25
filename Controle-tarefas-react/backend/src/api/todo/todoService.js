const Todo = require('./todo')

//o que será habilitado no restful
Todo.methods(['get', 'post', 'put', 'delete'])

//valida o retorno de um registro atualizado
//necessário pois o node não valida os registros atualizados
Todo.updateOptions({ new: true, runValidators: true })

module.exports = Todo