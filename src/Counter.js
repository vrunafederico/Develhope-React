import React from "react";


export class Counter extends React.Component{
    counter = 0;
    setInterval(()=>{
        console.log(counter)
        this.setState(() => {
            console.log(counter)
            counter = counter + 1
        })

    },1000)
    render(){
        return(<h1>{counter}</h1>)
    }
}