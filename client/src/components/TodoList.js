import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

import '../styles/_todos.scss';



const data = {
    "data": [
        {
            "todo": "Pick up milk",
            "done": false,
            "category": "Errabds",
            "priority": "high"
        },
        {
            "todo": "Finish Project",
            "done": false,
            "category": "Important",
            "priority": "high"
        },
        {
            "todo": "Watch Demon Slayer",
            "done": false,
            "category": "Entertainment",
            "priority": "low"
        },
        {
            "todo": "Play Valorant",
            "done": false,
            "category": "Entertainment",
            "priority": "low"
        },
        {
            "todo": "Walk the dog",
            "done": false,
            "category": "Errands",
            "priority": "medium"
        },
        {
            "todo": "Buy ASOT tickets",
            "done": false,
            "category": "Entertainment",
            "priority": "medium"
        },
        {
            "todo": "Do Nothing",
            "done": false,
            "category": "Entertainment",
            "priority": "low"
        },
    ]
}


const TodoList = () => {

    const [todos, setTodos] = useState([data.data]);
    console.log(todos)
    
    return (
        <div className="todo-container">
            <ul className='todo-list'>
                {todos[0].map((todo, index) => {
                    return (
                        <ToDoItem key={index} todo={todo.todo}/>
                    )
                })}
            </ul>

        </div>
    )
}

export default TodoList;
