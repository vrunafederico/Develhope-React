import React from "react";

export class Walcome extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome {this.props.name}</h1>
        {this.props.age < 65 && this.props.name === "john" &&(
          <Age age={this.props.age}/>
        )}
      </>
    );
  }
}

export class Age extends React.Component {
  render() {
    return (this.props.age > 18 ? <p>Your age is {this.props.age}</p> : <p>You are very young!</p>)
  }
}

Walcome.defaultProps = {
  name: "Sara",
};
