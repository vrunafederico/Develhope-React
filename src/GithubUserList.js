import React, { useState } from "react";
import {Link, Outlet, useNavigate} from "react-router-dom"


export function GithubUserList() {
    const [name, setName] = useState("");
    const navigate = useNavigate()
  
    const handleChange = (e) => {
      setName(e.target.value);
    };
  
    return (
      <>
        <input value={name} onChange={handleChange}></input>
        <button onClick={() => navigate(`${name}`)}>Search</button>
        <Link to="/">Home</Link>
        <Outlet></Outlet>
      </>
     
    );
}