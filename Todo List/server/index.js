const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoModel1 = require('./models/todo_model')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/TodoList')


<<<<<<< HEAD
app.get('./get',(req,resp) => {
=======
app.get('/get',(req,resp) => {
>>>>>>> 4b3c194 ('Completed')
    todoModel1.find()
    .then(result => resp.json(result))
    .catch(err => resp.json(err))
})

<<<<<<< HEAD
=======
app.put('/update/:id',(req,resp) => {
    const {id} =  req.params;
    console.log(id);
    todoModel1.findByIdAndUpdate({_id:id}, {Done:true})
    .then(result => resp.json(result))
    .catch(err => resp.json(err))
})

app.delete('/delete/:id',(req,resp) => {
    const {id} =  req.params;
    todoModel1.findByIdAndDelete({_id:id} )
    .then(result => resp.json(result))
    .catch(err => resp.json(err))
})


>>>>>>> 4b3c194 ('Completed')
app.post('/add', (req,resp) => {
    const task = req.body.task;
    todoModel1.create({
        task:task
<<<<<<< HEAD
    }).then(result => resp.json(result))
    .catch(err => resp.json(err))
})

=======
    }).then((result) => {location.reload()})
    .catch(err => resp.json(err))
})


>>>>>>> 4b3c194 ('Completed')
app.listen(3001, ()=>{
    console.log('server is runing')
})