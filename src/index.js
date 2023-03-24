import { App } from "./App";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.getElementById("app"));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Name name={<strong>giulio</strong>} age={40} />);

export function Name(props) {
  return (
    <>
      <h1>Walcome {props.name ?? "francesco"}</h1>
      <Age age={props.age} />
    </>
  );
}

export function Age(props) {
  return <p>Your age is {props.age}</p>;
}
