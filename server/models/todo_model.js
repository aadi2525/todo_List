const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    type:String
})

const todoModel1 = mongoose.model("todos",todoSchema)

module.exports = todoModel1