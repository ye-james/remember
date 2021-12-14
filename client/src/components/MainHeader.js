import React, { useState , useEffect} from 'react'

const MainHeader = () => {

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setDate(new Date())
    }, 1000);
        
        return () => clearInterval(interval);
    }, [date]);
    
    
    return (
        <header className="main-header">
            <h3 className="main-display__header">
                Today is {date.toLocaleDateString('en-US', options)}
            </h3>
            <h5 className='main-display__header-secondary'>
                The time now is: {date.toLocaleTimeString()}
            </h5>
        </header>
    )
}

export default MainHeader
