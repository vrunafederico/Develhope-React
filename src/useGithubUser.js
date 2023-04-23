import useSWR from 'swr'

const fetcher = url => fetch(url).then(responce => responce.json())

export function useGithubUser(username) {   
    const {data, error, isLoading} = useSWR(username ? `https://api.github.com/users/${username}`: null, fetcher)

    return {
        data,
        error,
        loading: isLoading
    };

 
}
