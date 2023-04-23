import { useState, useEffect } from "react";

import useSWR from 'swr'

const fetcher = url => fetch(url).then(responce => responce.json())

export function useGithubUser(username) {

    const {data, error, isLoading} = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return {
        data,
        error,
        loading: isLoading
    };
}
