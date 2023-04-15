import React, { useEffect } from "react";
import { useState } from "react";


export function ClickCounter({onCounterChange}){
    
    const [count, setCount] = useState(0);

    const handleCount = () =>{
        setCount(count+1)
    }

    useEffect(()=>{
        onCounterChange(count)
    },[count])

    return(
        <div>
            <div>Count: {count}</div>
            <button onClick={handleCount}>increment</button>
        </div>
    );   
}