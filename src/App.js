import React from "react";
import { Walcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return <Walcome age={15} name={<strong>Marco</strong>} />;
  }
}
