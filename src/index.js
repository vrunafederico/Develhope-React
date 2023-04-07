import React, { useState, useEffect } from "react";
import  ReactDOM  from "react-dom";
import { Counter } from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("Root"))
ReactDOM.render(<Counter />, document.getElementById("App"));

root.render(
    <Counter2 />
);

export function Counter2(){
 
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCounter(counter+1);
        }, 1000);
      });

    return(
        <h1>{counter}</h1>
    )
}

