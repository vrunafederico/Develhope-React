import { useState } from "react";


export function useInput(){
    const [text, setText] = useState();

    const handleChange = () =>{
        setText(text)
    }

    return {
        text: text,
        onChange: handleChange
    }
}