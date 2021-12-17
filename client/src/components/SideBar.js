import React from 'react'

const SideBar = () => {

    const name = "James";
    return (
        <div className='sidebar'>
            <h3 className="sidebar__welcome">Welcome {name}</h3>
            <div className="sidebar__nav">
                <ul className="nav">
                    <li className="nav__item">Home</li>
                    <li className="nav__item">Important</li>
                    <li className="nav__item">Tasks</li>
                    <li className="nav__item">Completed Tasks</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
