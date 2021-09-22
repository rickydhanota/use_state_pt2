import React, { useState } from 'react';

const Count = (props) => {
    const [count, setCount] = useState(0);   // use descriptive names for your destructured variables. Make sure to import useState at the top!

    const handleClick = () => {
        setCount(count + 1);
    }

    const [count2, setCount2] = useState(0);
     
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{ count }</p>
            <button onClick={ handleClick }>Click First Method</button>
            <br></br>
            <p>{ count2 }</p>
            <button onClick = { (event) => setCount2(count2 + 1)}>Click Second Method!</button>
        </div>
    );
};


export default Count;