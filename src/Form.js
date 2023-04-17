import React from "react";
import { useInput } from "./useInput";


export function Form(){
   const {text, onChange} = useInput()

    return(
        <div>
           <input value={text} onChange={onChange} placeholder="username"></input>
           <input type="password" value={text} onChange={onChange} placeholder="password"></input>
        </div>
    );   
}