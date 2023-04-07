import React from "react";
import { UnLogin } from "./UnLogin";

export class App extends React.Component{
    
    onlogin = (name) =>{
        console.log(name)
    }

    render(){
        return(
            <UnLogin onLogin={this.onlogin}></UnLogin>
        )
    }
}

