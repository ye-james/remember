import React from 'react'
import ReactDOM from 'react-dom';
import '../styles/_todos.scss';

import TodoForm from './TodoForm';

const TodoFormModal = ({ children, open, onClose }) => {
    
    if (!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className="overlay" onClick={onClose}></div>
            <div className='todo-modal'>
                <button className="todo-modal__close" onClick={onClose}>X</button>
                <TodoForm/>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default TodoFormModal;
