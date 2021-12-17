import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext'
import ToDoItem from './ToDoItem';
import TodoFormModal from './TodoFormModal';

import '../styles/_todos.scss';

const TodoList = () => {

    const { todos } = useContext(TodoContext);
    const [open, setOpen] = useState(false);

    
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
            <button onClick={() => setOpen(true)}>Add Item</button>
            <TodoFormModal open={open} onClose={()=> setOpen(false)} />
        </div>
    )
}

export default TodoList;
