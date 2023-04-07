import React, {createRef} from "react";

export class UnLogin extends React.Component{
    componentDidMount() {
        this.refInput.focus();
      }
    

    handleLogin = (e)=> {
        e.preventDefault()
        const state = {
            username: e.target.elements.username.value, 
            password: e.target.elements.username.value, 
        }
        this.props.onLogin(state)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <input ref={(input) => { this.refInput = input; }} name="username" placeholder="username"></input>
                    <input name="password" placeholder="password"></input>

                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
           
            </div>
        )
    }
}
