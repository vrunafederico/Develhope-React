import React from "react";
import { useMemo } from "react";

export function FilteredList({ list }) {
  const name = useMemo(() => filterAge(list), [list]);
  return (
    <div>
      {name.map((el) => {
        return (
          <div key={el.id}>
            <div>id: {el.id}</div>
            <div>name: {el.name}</div>
            <div>age; {el.age}</div>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

const filterAge = (list) => {
  const data = [];

  list.map((el) => {
    if (el.age >= 18) {
      data.push(el);
    }
    return null;
  });

  return data;
};
