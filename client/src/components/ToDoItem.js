import React, { useState, useEffect, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles/_todos.scss';

const ToDoItem = ({ id, todo, category }) => {
    const { deleteTodo } = useContext(TodoContext);
    const [todoCategory, setTodoCategory] = useState(null);


    const handleTodoDelete = (id) => {
        deleteTodo(id);
    }

    return (
        <li className='todo-item'>
            <input type="checkbox" className="todo-done" />
            <p className="todo-description">{todo}</p>
            <span className='todo-controls'>
                <button className='btn todo-edit'>Edit</button>
                <button className='btn todo-delete' onClick={() =>handleTodoDelete(id)}>Delete</button>
            </span>
            <p className="todo-category">{category}</p>
        </li>
        
    )
}

export default ToDoItem
