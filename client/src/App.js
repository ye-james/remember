import React from 'react';
import './styles/styles.scss';

import SideBar from './components/SideBar';
import Main from './components/Main';

import { TodoContextProvider } from './context/TodoContext';

const App = () => {
    return (
        <TodoContextProvider>
            <div className='App'>
                <SideBar />
                <Main/>
            </div>           
        </TodoContextProvider>
    )
}

export default App;
