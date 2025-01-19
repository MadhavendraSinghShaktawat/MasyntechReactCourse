import React, {useState} from 'react';
const Counter = () => {

    //Initiliaze the counter with default value of 0
    const [counter, setCounter] = useState(0);

    //Increment the counter
    const IncrementCounter = () => {
        setCounter(counter+1);
    }
    //Decrement the counter
    const DecrementCounter = () => {
        setCounter(counter-1);
    }
    //Reset the counter
    const ResetCounter = () => {
        setCounter(0);
    }

    return (
       <div>
            <h1>Counter: {counter}</h1>
            <button onClick={ IncrementCounter } style={{ margin: "0 5px" }}>Increment</button>
            <button onClick={ DecrementCounter } style={{ margin: "0 5px" }}>Decrement</button>
            <button onClick={ ResetCounter } style={{ margin: "0 5px" }}>Reset</button>
       </div>
    );
};


export default Counter;