import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

export class Login extends React.Component{
    state = {
        username : "",
        password: ""
    }

    handleChange = (e) =>{
        const name = e.target.name;
        this.setState({
            [name]: e.target.value,
        })
    }

    handleButton = ()=> {
        this.props.onLogin(this.state)
    }

    render(){
        return (
            <div>
                <input name="username" onChange={this.handleChange} placeholder="username"></input>
                <input name="password" type="password" onChange={this.handleChange} placeholder="password"></input>
                <button onClick={this.handleButton} disabled = {!this.state.username || !this.state.password}>Button</button>
            </div>
        )
    }
}
