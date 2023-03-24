import React from "react";

export class Walcome extends React.Component{
    render(){
        return (
            <h1>
                Welcome {this.props.name}
            </h1>
        )
    }
}

Walcome.defaultProps = {
    name: "Sara",
}
