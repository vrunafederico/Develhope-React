import React from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}){
    const {data} = useGithubUser(username)

    return(
        data && <div style={{display:"flex", flexDirection:"column"}}>
            <span>{data.avatar_url}</span>
            <span>{data.id}</span>
            <span>{data.login}</span>
            <span>{data.type}</span>
        </div>
    )
}