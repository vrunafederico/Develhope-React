import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component{

    state = {
        name: ""
    }

    handleChange = (e) =>{
        console.log(e)
        this.setState({
            name: e.target.value
        })
    }
s
    render(){
        return (
            <div>   
                <Welcome name={this.state.name} />
                <input name ="name" onChange={this.handleChange}></input>
            </div>
        )
    }
}
