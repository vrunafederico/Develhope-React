import { App } from "./App";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { InteractiveWelcome } from "./InteractiveWelcome";

ReactDOM.render(<App />, document.getElementById("app"));
const root = ReactDOM.createRoot(document.getElementById("root"));

