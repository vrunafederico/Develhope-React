import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Language() {
  const language = useContext(LanguageContext);

  return (
    <div>{language}</div>
  );
}
