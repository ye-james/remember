export default (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return;
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state;
    }
}