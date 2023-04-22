import { useCallback, useState } from "react";


export function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);

    const handleIncrement = useCallback(() =>{
        setCount(count+1)
    },[count])
    
    const handleDecrement = useCallback( () =>{
        setCount(count-1)
    },[count])

    
    const handleReset = useCallback( () =>{
        setCount(initialValue)
    },[count])

    return {
        counter: count,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset
    }
}