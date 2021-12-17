const Todo = require('../models/TodoModel');

exports.getHomeToDos = (req, res) => {
    
    res.send('Example To Do Item')

}

exports.addTodo = async (req, res) => {

    try {
        const newTodo = new Todo({
            id: req.body.id,
            todo: req.body.todo,
            done: req.body.done,
            category: req.body.category,
            priority: req.body.category
        });

        await newTodo.save();
        res.status(200).json({msg: 'Success adding todo'})

    
    } catch (err) {
        res.send(err);
    }

}