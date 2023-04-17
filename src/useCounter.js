import { useState } from "react";


export function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);

    const handleIncrement = () =>{
        setCount(count+1)
    }
    
    const handleDecrement = () =>{
        setCount(count-1)
    }

    
    const handleReset = () =>{
        setCount(initialValue)
    }

    return {
        counter: count,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset
    }
}