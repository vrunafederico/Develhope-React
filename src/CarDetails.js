import React from "react";
import { useRef } from "react";

export function CarDetails(props) {
  const initialValue = useRef({
    model: props.model,
    color: props.color,
    year: props.year,
  });

  console.log(initialValue);

  const handleChange = (e) => {

    e.preventDefault();
    console.log(initialValue);
  };

  return (
    <form>
      <input
        ref={initialValue.current.model}
        onChange={handleChange}
      ></input>
      <input value={initialValue.current.color} onChange={handleChange}></input>
      <input value={initialValue.current.year} onChange={handleChange}></input>
    </form>
  );
}
