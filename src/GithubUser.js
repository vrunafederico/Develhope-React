import { useEffect, useState } from "react";
import React from "react";

export function GithubUser({username}){
    const [data, setData] = useState();

    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
            .then(responce => responce.json())
            .then(result => setData(result))
    },[username])

    console.log(data)

    return(
        data && 
                <div style={{display:"flex", flexDirection:"column"}}>
                    <span>{data.avatar_url}</span>
                    <span>{data.id}</span>
                    <span>{data.login}</span>
                    <span>{data.type}</span>
                </div>
    )
}