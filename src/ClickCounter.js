import React from "react";
import { useCounter } from "./useCounter";


export function ClickCounter(){
   const {counter, onIncrement, onDecrement, onReset} = useCounter(10)

    return(
        <div>
            <div>Count: {counter}</div>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );   
}