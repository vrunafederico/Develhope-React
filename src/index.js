import { App } from "./App";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("app"));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Name age={20} />);

export function Name(props) {
  return (
    <>
      <h1>Walcome {props.name ?? "francesco"}</h1>
      {props.age > 18 && props.age < 65 && props.name === "john" && <Age2 age={props.age} />}
    </>
  );
}

export function Age2(props) {
  return <p>Your age is {props.age}</p>;
}
