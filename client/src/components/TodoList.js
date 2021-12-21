import React, { useState, useEffect, useContext } from 'react';
import { TodoContext } from '../context/TodoContext'
import ToDoItem from './ToDoItem';
import TodoFormModal from './TodoFormModal';

import '../styles/_todos.scss';

const TodoList = () => {

    const { todos, getAllTodos } = useContext(TodoContext);
    const [open, setOpen] = useState(false);

    console.log(todos)
    useEffect(() => {
        getAllTodos();
        console.log(todos);
    }, [])

    const renderTodos = todos.length === 0 ? <h2>You have nothing to do! Add something to do!</h2> : 
        <>
        <ul className='todo-list'>
            {todos[0].map((todo, index) => {
                return (
                    <ToDoItem key={index} id={todo.id} todo={todo.todo} category={todo.category}/>
                )
            })}
        </ul>
        </>

    return (
        <div className="todo-container">
            <h2>Tasks</h2>
            {renderTodos}
            <button onClick={() => setOpen(true)}>Add Item</button>
            <TodoFormModal open={open} onClose={()=> setOpen(false)} />
        </div>
    )
}

export default TodoList;
