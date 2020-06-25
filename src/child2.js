import React, { useReducer } from 'react';
import counterReducer from './counterReducer';


const Child2 = () => {

    let [state, dispatch] = useReducer(counterReducer, 1)
    return (
        <div>

            <h2>using reducer</h2>
            <h3>From Child 2</h3>
            <h3>Value of reducer: {state}</h3>
            <button
            onClick={
                ()=>{
                    dispatch('INCREMENT')
                }
            }>
                Increment reducer
            </button>

            <button
            onClick={
                ()=>{
                    dispatch('DECREMENT')
                }
            }>
                Decrement reducer
            </button>
        </div>
    )
}


export default Child2;