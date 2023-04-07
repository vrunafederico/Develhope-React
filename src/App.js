import React from "react";
import { Walcome } from "./Welcome";
import { InteractiveWelcome } from "./InteractiveWelcome";

export class App extends React.Component{
    render(){
        return(
            <InteractiveWelcome></InteractiveWelcome>
        )
    }
}

