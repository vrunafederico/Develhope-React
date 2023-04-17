import { useState,useEffect } from "react";

export function useGithubUser(username){
    const [data, setData] = useState();

    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
            .then(responce => responce.json())
            .then(result => setData(result))
            .catch(error => console.log(error))
    },[username])

    console.log(data)

    return{
        data: data
    }
}