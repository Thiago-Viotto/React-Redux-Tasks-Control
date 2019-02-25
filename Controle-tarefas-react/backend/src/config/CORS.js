//Permite que uma requisição venha de qualquer origim
module.exports = function(req, res, next) {
    // * significa que vem de qualquer origem
    res.header('Acess-Control-Allow-Origin','*') //possa especificar origem de quem vai consumir a API
    res.header('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}