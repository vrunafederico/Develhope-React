import React from "react";
import { Login } from "./Login";

export function App(){
    const onlogin = (name) =>{
        console.log(name)
    }

    return(
        <Login onLogin={onlogin}></Login>
    )
}


