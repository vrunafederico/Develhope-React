import React from "react";
import { Counter } from "./Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/counter"
          element={<Counter initalValue={0} increment={1} interval={1000} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
