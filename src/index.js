import React, { useEffect, useState } from "react";
import { Counter } from "./Counter";
import  ReactDOM from 'react-dom';
import { createRoot } from 'react-dom'

ReactDOM.render(<Counter />, document.getElementById("Root"));
const Root = createRoot(document.getElementById("App"));

Root.render(
    <>
        <Counter2 />
        <Counter3 />
    </> 
    
)


export function Counter2(){
    let [count, setCount] = useState(0);

    setInterval(()=>{
        setCount(() => {
            return count = count + 1
        })
    },1000)

    return (
        <h1>{count}</h1>
    )
}

export function Counter3(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(() => {
                return count + 1
            })
        },1000)
    })

    return (
        <h1>{count}</h1>
    )
}