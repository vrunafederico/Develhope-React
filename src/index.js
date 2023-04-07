import { App } from "./App";
import ReactDOM  from "react-dom";

import { ClickCounter2 } from "./ClickCounter";

// ReactDOM.render(<App />, document.getElementById("app"));

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <App />
)

const root2 = ReactDOM.createRoot(document.getElementById("app"));


root2.render(
    <ClickCounter2 />
)

