import React, { useState } from 'react'

const TodoForm = (props) => {

    const [input, setInput] = useState('');

    const onInputChange = (e) => {
        setInput(e.target.value)
    }
    
    const onFormSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <form className="todo-form" onSubmit={onFormSubmit}>
            <input 
                className="todo-input" 
                name="text" 
                type='text' 
                placeholder='Add a to do item' 
                value={input} 
                onChange={onInputChange}
            />
        </form> 
    )
}

export default TodoForm
