const mongoose = require('mongoose')
mongoose.Promise = global.Promise //apenas para tirar o warning
module.exports = mongoose.connect('mongodb://localhost/todo')