import { useGithubUser } from "./useGithubUser";

export function GithubUser({username}){
    const {data, error, loading} = useGithubUser(username)

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