
import React from "react";
import { CounterDisplay } from "./CounterDisplay";
import { useState, useEffect } from "react";

export function Counter({initalValue=0, increment=1, interval=1000 }){
    const [count, setCount] = useState(initalValue);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(() => {
                return count + increment
            })
        },interval)
    },[count])

    return (
        <CounterDisplay count={count}/>
    )   
}