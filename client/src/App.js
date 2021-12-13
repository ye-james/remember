import React from 'react';
import './styles/styles.scss';

import SideBar from './components/SideBar';
import Main from './components/Main';

const App = () => {
    return (
        <div className='App'>
            <SideBar />
            <Main/>
        </div>
    )
}

export default App;
