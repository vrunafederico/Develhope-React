import React from "react";
import { ClickCounter } from "./ClickCounter";

export function App(){

    const onCounterChange = (count) =>{
        console.log(count)
    }

    return(
        <ClickCounter onCounterChange={onCounterChange}/>
    )
}