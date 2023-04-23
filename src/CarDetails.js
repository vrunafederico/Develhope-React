import { useEffect } from "react";
import { useRef } from "react";

export function CarDetails({initialData}) {

  const model = useRef(null);
  const year = useRef(null);
  const color = useRef(null);

   useEffect(() => {
      model.current.value = initialData.model;
      year.current.value = initialData.year;
      color.current.value = initialData.color;
  }, [initialData])

    return (
        <form>
            <input ref={model} type="text" name="model"></input>
            <input ref={year} type="year" name="year"></input>
            <input ref={color} type="text" name="color"></input>
        </form>
    )
}
