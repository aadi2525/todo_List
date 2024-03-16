const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
<<<<<<< HEAD
    type:String
=======
    task:String,
    Done: {
        type:Boolean,
        default:false
    }
>>>>>>> 4b3c194 ('Completed')
})

const todoModel1 = mongoose.model("todos",todoSchema)

module.exports = todoModel1