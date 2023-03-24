import { App } from "./App";
import ReactDOM  from "react-dom";
import { render } from "@testing-library/react";

ReactDOM.render(<App />, document.getElementById("app"));
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <Name name="Giovanni"/>
)


export function Name(props){
    return(
        <h1>Walcome {props.name}</h1>
    )
}