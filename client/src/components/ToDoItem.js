import React from 'react';
import '../styles/_todos.scss';

const ToDoItem = (props) => {
    return (
        <li className='todo-item'>
            <p className="todo-description">{props.todo}</p>
            <span className='todo-controls'>
                <button className='btn todo-edit'>Edit</button>
                <button className='btn todo-delete'>Delete</button>
            </span>

        </li>
    )
}

export default ToDoItem
