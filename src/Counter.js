
import React from "react";
import { CounterDisplay } from ".";

export class Counter extends React.Component{
    state = {
        count : this.props.initalValue
    }

    componentDidMount(){
        setInterval(() => {
            this.setState((state)=>{
                return{
                    count: state.count + this.props.increment,
                }
            })
        }, this.props.interval);
    }
        
    
    render(){
        return (<CounterDisplay count={this.state.count}/>)
    }
}
