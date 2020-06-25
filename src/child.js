import React, { useContext } from 'react';
import counterContext from './counterContext';

const Child = ()=>{
    let counterValue = useContext(counterContext)
    return(
    <div>
    <h1>Hello from child component</h1>
    <h2>Counter value is: {counterValue[0]}</h2>

    <button onClick = {
        ()=>{
            counterValue[1](++counterValue[0])
        }
    }>
        Increment context
    </button>
    </div>
    )
}


export default Child;