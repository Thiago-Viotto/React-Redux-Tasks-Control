const server = require('./config/server')
require('./config/database')

//passa o server como parâmetro 
require('./config/routes')(server)
