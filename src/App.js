import React from "react";
import { LanguageContext } from "./LanguageContext";
import { Language } from "./Language";

export class App extends React.Component {
    state = {
        language: "en",
    };

    handleLanguageChange = (e) => {
        this.setState({
            language: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <select value={this.state.language} onChange={this.handleLanguageChange}>
                    <option value="en">inglese</option>
                    <option value="it">italiano</option>
                    <option value="es">spagnolo</option>
                    <option value="da">tedesco</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <Language />
                </LanguageContext.Provider>
            </div>
        );
    }
}
