
import React from "react";
import { CounterDisplay } from "./CounterDisplay";
import { useState, useEffect } from "react";

export function Counter(props){
    const [count, setCount] = useState(props.initalValue);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(() => {
                return count + props.increment
            })
        },props.interval)
    },[count])

    return (
        <CounterDisplay count={count}/>
    )   
}