import React, { useState } from "react";
import { Counter } from "./Counter";
import  ReactDOM from 'react-dom';

ReactDOM.render(<Counter />, document.getElementById("Root"));
const Root = createRoot(document.getElementById("Root"));

Root.render(){
    const [count, setCount] = useState(0);

    setInterval(()=>{
        setCount +1;
    })

    return (
        <h1>{count}</h1>
    )
}