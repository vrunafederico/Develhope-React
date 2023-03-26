import { render } from "@testing-library/react";
import React from "react";
import { Counter } from "./Counter";

React.render(<Counter />, document.getElementById("Root"))