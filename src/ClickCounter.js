import React from "react";
import { useState } from "react";

export class ClickCounter extends React.Component{
    state = {
        count: 0,
    }

    handleCount = () =>{
        this.setState( {
            count: this.state.count +1  ,
        })
    }

    render(){
        return(
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={this.handleCount}>increment</button>
            </div>
        )
    }
}


export function ClickCounter2(){
    
    const [count2, setCount2] = useState(0);

    const handleCount2 = () =>{
        setCount2(count2+1)
    }

    return(
        <div>
            <div>Count: {count2}</div>
            <button onClick={handleCount2}>increment</button>
        </div>
    );   
}