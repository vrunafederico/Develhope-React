
import  ReactDOM  from "react-dom";
import { CarDetails } from "./CarDetails";

const root = ReactDOM.createRoot(document.getElementById("Root"))

root.render(
    <CarDetails initialData={{model:"bmw", color: "yellow", year: "2025"}}/>
);


