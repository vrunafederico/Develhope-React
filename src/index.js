import React, { useEffect, useState } from "react";
import { Counter } from "./Counter";
import  ReactDOM from 'react-dom';
import { createRoot } from 'react-dom'

ReactDOM.render(<Counter initalValue={0} increment={2} interval={1000}/>, document.getElementById("Root"));
const Root = createRoot(document.getElementById("App"));

Root.render(
    <>
        <Counter2 initalValue={0} increment={2} interval={1000}/>
        <Counter3 initalValue={10} increment={1} interval={2000}/>
    </> 
    
)


export function Counter2(props){
    let [count, setCount] = useState(props.initalValue);

    setInterval(()=>{
        setCount(() => {
            return count = count + props.increment
        })
    },props.interval)

    return (
        <h1>{count}</h1>
    )
}

export function Counter3(props){
    const [count, setCount] = useState(props.initalValue);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(() => {
                return count + props.increment
            })
        },props.interval)
    })

    return (
        <h1>{count}</h1>
    )
}