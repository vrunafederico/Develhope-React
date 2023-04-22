import React from "react"
import { FilteredList } from "./FilteredList"


export function App() {
    const list = [
        {id: 1, name:"luca", age: 12},
        {id: 2, name:"sara", age: 20},
        {id: 3, name:"giulio", age: 30},
        {id: 4, name:"claudia", age: 8}
    ]

    return(
        <FilteredList list={list} />
    )
}