import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {
    const [user, setUser] = useState([]);
    const [text, setText] = useState();

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleClick = () => {
        setUser([...user, text]);
    };

    return (
        <>
            <input value={text} onChange={handleChange}></input>
            <button onClick={handleClick}>Add</button>

            <div>
                {user.map((el) => {
                    return (
                        <>
                            <h2>{el}</h2>
                            <GithubUser username={el} />
                        </>
                    );
                })}
            </div>
        </>
    );
}
