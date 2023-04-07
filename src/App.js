import React from "react";
import { Login } from "./Login";

export class App extends React.Component{
    onlogin = (name) =>{
        console.log(name)
    }

    render(){
        return(
            <Login onLogin={this.onlogin}></Login>
        )
    }
}

