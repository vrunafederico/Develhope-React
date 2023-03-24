import React from "react";

export class Walcome extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome {this.props.name}</h1>
        {this.props.age > 18 && <Age age={this.props.age}/>}
      </>
    );
  }
}

export class Age extends React.Component {
  render() {
    return <p>Your age is {this.props.age}</p>;
  }
}

Walcome.defaultProps = {
  name: "Sara",
};
