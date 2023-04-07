import React from "react";


export class ClickTracker extends React.Component{
    state = {
        name : ""
    }

    handleClick = (e) =>{
        this.setState({
            name: e.target.name
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button name="pulsante 1" onClick={this.handleClick}>pulsante 1</button>
                <button name="pulsante 2" onClick={this.handleClick}>pulsante 2</button>
                <button name="pulsante 3" onClick={this.handleClick}>pulsante 3</button>
            </div>
            
        )
    }
}

