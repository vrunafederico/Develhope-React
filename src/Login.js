import React from "react";
import { useState } from "react";

export function Login({onLogin}){
    const [data, setData] = useState({username: "", password: ""})

    const handleChange = (e) =>{
        const name = e.target.name;
        setData({
            ...data,
            [name]: e.target.value
        })
    }

    const handleButton = ()=> {
        onLogin(
            data
        )
    }

    return (
        <div>
            <input name="username" onChange={handleChange} placeholder="username"></input>
            <input name="password" type="password" onChange={handleChange} placeholder="password"></input>
            <button onClick={handleButton} disabled = {!data.username || !data.password}>Button</button>
        </div>
    )
}

