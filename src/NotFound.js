import React from "react";
import { Link } from "react-router-dom";

export function NotFound(){
    return (
        <>
            <div>Page not found</div>
            <Link to="/">Home</Link>
        </>
    )
}