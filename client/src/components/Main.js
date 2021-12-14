import React, { useState , useEffect} from 'react';

import MainHeader from './MainHeader';
import TodoList from './TodoList';

const Main = () => {


    

    return (
        <div className="main-display">
            <MainHeader/>



            <section className="main-container">
                <TodoList/>
            </section>

        </div>
    )
}

export default Main
