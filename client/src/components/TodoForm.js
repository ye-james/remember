import React, { useState, useContext } from 'react'
import '../styles/_todos.scss';
import { TodoContext } from '../context/TodoContext';


const TodoForm = () => {

    const [todo, setTodo] = useState(null);
    const [done, setDone] = useState(false);
    const [category, setCategory] = useState(false);
    const [priority, setPriority] = useState('Low');

    const { addTodo } = useContext(TodoContext);


    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            todo,
            done,
            category,
            priority
        }

        addTodo(newTodo);
    }
    
    return (
        <form className="todo-form" onSubmit={handleFormSubmit}>
            <label className='todo-form__name: '>Name your to do item:
                <input type="text" name="name" placeholder="ex: Walk the dog..." onChange={e => setTodo(e.target.value)}  required/>
            </label>
            <label className='todo-form__category: '>Category:
                <input type="text" name="category" placeholder="ex: Errand" onChange={e => setCategory(e.target.value)} required/>
            </label>
            <label className="todo-form__priority">Priority:
                <select
                    className="todo-form__priority-list"
                    name="priority"
                    id="priority"
                    value={priority}
                    required
                    onChange={e => setPriority(e.target.value)}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                </select>
            </label>
            <button>Add To Do</button>
        </form>
    )
}

export default TodoForm;
