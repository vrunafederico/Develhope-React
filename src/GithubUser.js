import React, { useEffect } from "react";
import { useGithubUser } from "./useGithubUser";
import {useParams} from "react-router-dom"

export function GithubUser(){
    const {username} = useParams();

    const {onSearch, data, error, loading} = useGithubUser(username)

    useEffect(()=>{
        onSearch(username)
    },[])
        
    return(
        <>
            {error && <div>{error}</div>}
            {loading && <div>loading</div>}
            {data && <div style={{display:"flex", flexDirection:"column"}}>
                <span>{data.avatar_url}</span>
                <span>{data.id}</span>
                <span>{data.login}</span>
                <span>{data.type}</span>
            </div>}
        </>
    )
}