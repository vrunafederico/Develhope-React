import { App } from "./App";
import ReactDOM  from "react-dom";
import React, { useState } from 'react';

ReactDOM.render(<App />, document.getElementById("app"));
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <Name name="Giovanni"/>
)


export function Name(){
    const [name, setName] = useState("");

    const handleClick = (e) =>{
        setName(e.target.name)
    }

    return(
        <div>
            <h1>{name}</h1>
            <button name="pulsante 1" onClick={handleClick}>pulsante 1</button>
            <button name="pulsante 2" onClick={handleClick}>pulsante 2</button>
            <button name="pulsante 3" onClick={handleClick}>pulsante 3</button>
        </div>
    )
}