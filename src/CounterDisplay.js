import React from "react";
import { Link } from "react-router-dom";

export function CounterDisplay(props) {
  return (
    <>
      <h1>{props.count}</h1>
      <Link to="/">Home</Link>
    </>
  );
}
