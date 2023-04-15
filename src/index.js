
import ReactDOM  from "react-dom";
import { Counter } from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("App"));

root.render(
    <Counter initalValue={0} increment={1} interval={1000}/>
)

