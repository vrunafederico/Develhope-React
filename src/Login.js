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

    handleLogin = ()=> {
        this.props.onLogin(this.state)
    }

    handleReset = () =>{
        this.setState({
            username: "",
            password: ""
        })
    }

    render(){
        return (
            <div>
                <input name="username" onChange={this.handleChange} value={this.state.username} placeholder="username"></input>
                <input name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="password"></input>
                <button onClick={this.handleLogin} disabled = {!this.state.username || !this.state.password}>Login</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
