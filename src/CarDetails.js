import React from "react";
import { useRef } from "react";

export function CarDetails(props) {

  const text = useRef()
  const text2 = useRef()
  const text3 = useRef()


  

  const submitHandler = () => {
    console.log(text.current.value)
    props.model = text.current.value
    props.color= text2.current.value
    props.year= text3.current.value
  

    
  };

  console.log(props)

  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={text} ></input>
      <input type="text" ref={text2} ></input>
      <input type="text" ref={text3} ></input>
      <button>Add Meetup</button>
    </form>
  );
}
