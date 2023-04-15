import React from "react";
import { useState } from "react";


export function ClickCounter(){
    
    const [count, setCount] = useState(0);

    const handleCount = () =>{
        setCount(count+1)
    }

    return(
        <div>
            <div>Count: {count}</div>
            <button onClick={handleCount}>increment</button>
        </div>
    );   
}