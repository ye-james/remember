import React, { useState, useEffect } from 'react';
import '../styles/_todos.scss';

const ToDoItem = ({ todo, category }) => {
    
    const [todoCategory, setTodoCategory] = useState(null);

    return (
        <li className='todo-item'>
            <input type="checkbox" className="todo-done" />
            <p className="todo-description">{todo}</p>
            <span className='todo-controls'>
                <button className='btn todo-edit'>Edit</button>
                <button className='btn todo-delete'>Delete</button>
            </span>
            <p className="todo-category">{category}</p>
        </li>
        
    )
}

export default ToDoItem
