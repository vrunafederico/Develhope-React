import { useState } from "react";

export function useGithubUser(username) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    async function search(){
        setLoading(true)
        try{
            const responce = await  fetch(`https://api.github.com/users/${username}`)
            const json = await responce.json()
            setData(json)
        }catch(error){
            setError(error)
        }finally{
            setLoading(false)
        }
    }

    return {
        onSearch: search,
        data,
        error,
        loading,
    };
}
