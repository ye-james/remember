import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext'
import ToDoItem from './ToDoItem';
import TodoForm from './TodoForm';

import '../styles/_todos.scss';

const TodoList = () => {

    const { todos } = useContext(TodoContext);

    
    return (
        <div className="todo-container">
            <h2>Tasks</h2>
            <ul className='todo-list'>
                {todos.map((todo, index) => {
                    return (
                        <ToDoItem key={index} id={todo.id} todo={todo.todo} category={todo.category}/>
                    )
                })}
            </ul>
            <TodoForm/>
        </div>
    )
}

export default TodoList;
