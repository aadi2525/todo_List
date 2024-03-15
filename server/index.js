const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoModel1 = require('./models/todo_model')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/TodoList')


app.get('./get',(req,resp) => {
    todoModel1.find()
    .then(result => resp.json(result))
    .catch(err => resp.json(err))
})

app.post('/add', (req,resp) => {
    const task = req.body.task;
    todoModel1.create({
        task:task
    }).then(result => resp.json(result))
    .catch(err => resp.json(err))
})

app.listen(3001, ()=>{
    console.log('server is runing')
})