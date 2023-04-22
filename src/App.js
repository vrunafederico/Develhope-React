import React, { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { Language } from "./Language";

export function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">inglese</option>
        <option value="it">italiano</option>
        <option value="es">spagnolo</option>
        <option value="da">tedesco</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Language />
      </LanguageContext.Provider>
    </div>
  );
}
