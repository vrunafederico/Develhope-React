import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

export function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate()

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <input value={name} onChange={handleChange}></input>
      <button onClick={() => navigate(`/users/${name}`)}>Search</button>
    </>
  );
}
