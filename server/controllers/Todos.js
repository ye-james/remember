const Todo = require('../models/TodoModel');

exports.getAllTodos = async (req, res) => {
    try {
        const result = await Todo.find({});
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).json({error: err})
    }
}

exports.addTodo = async (req, res) => {
    
    const { todo, done, category, priority } = req.body.newTodo;
    try {
        const newTodo = new Todo({
            id: Math.floor(Math.random() *1000),
            todo,
            done,
            category,
            priority
        });

        const result = await newTodo.save();
        console.log(result);
        res.status(200).json({
            msg: "Successfully added to do",
            data: result
        });

    
    } catch (err) {
        res.send(err);
    }

}


exports.deleteTodo = async (req, res) => {
    console.log(req.body);
    // try {
    //     const result = await Todo.findOneAndDelete({ id: id });
    //     console.log(result);
    // } catch (err) {
    //     console.log(err)
    // }
}