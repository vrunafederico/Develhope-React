import React from "react";


export class Counter extends React.Component{
    Counter = {
        count: 0
    }

    constructor(){
        setInterval(() => {
            this.setState(()=>{
                return this.Counter.count+1;
            })
        }, 1000);
    
    }
    
  
    render(){
        return (<h1>{this.Counter.count}</h1>)
    }
}