import React, { createContext, useReducer } from 'react';
import TodoReducer from './TodoReducer';
import axios from 'axios';


//Initial State
const initalState = {
    "todos": [
        // {
        //     "id": 1,
        //     "todo": "Pick up milk",
        //     "done": false,
        //     "category": "Errands",
        //     "priority": "high"
        // },
        // {
        //     "id": 2,
        //     "todo": "Finish Project",
        //     "done": false,
        //     "category": "Important",
        //     "priority": "high"
        // },
        // {
        //     "id": 3,
        //     "todo": "Watch Demon Slayer",
        //     "done": false,
        //     "category": "Entertainment",
        //     "priority": "low"
        // },
        // {
        //     "id": 4,
        //     "todo": "Play Valorant",
        //     "done": false,
        //     "category": "Entertainment",
        //     "priority": "low"
        // },
        // {
        //     "id": 5,
        //     "todo": "Walk the dog",
        //     "done": false,
        //     "category": "Errands",
        //     "priority": "medium"
        // },
        // {
        //     "id": 6,
        //     "todo": "Buy ASOT tickets",
        //     "done": false,
        //     "category": "Entertainment",
        //     "priority": "medium"
        // },
        // {
        //     "id": 7,
        //     "todo": "Do Nothing",
        //     "done": false,
        //     "category": "Entertainment",
        //     "priority": "low"
        // },
    ],
    loadingTodos: false
}


//Create Context 
export const TodoContext = createContext(initalState);


//Create context provider
export const TodoContextProvider = ({ children }) => {
    
    //Initialize Reducer
    const [state, dispatch] = useReducer(TodoReducer, initalState)

    //Actions

    async function getAllTodos() {
        const { data } = await axios.get('http://localhost:5000/todo')
        console.log(data);
        dispatch({
            type: 'GET_ALL_TODOS',
            payload: data
        })
    }

    function addTodo(newTodo) {
        axios.post('http://localhost:5000/todo', {
            newTodo
        }).then(res => {
            dispatch({
                type: 'ADD_TODO',
                payload: res.data
            })
        })
    }

    function deleteTodo(id) {
        console.log(id);
        axios.delete('http://localhost:5000/todo', {
            id:id
        }).then(
            dispatch({
                type: 'DELETE_TODO',
                payload: id
            })
        )

    }

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            deleteTodo,
            addTodo,
            getAllTodos
        }}>
            {children}
        </TodoContext.Provider>
    )
}