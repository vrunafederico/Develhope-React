import React from "react";
import { LanguageContext } from "./LanguageContext";

export class App extends React.Component {
    state = {
        language: "en",
    };

    handleLanguageChange = (e) =>{
        this.setState({
            language: e.target.value
        })
    }

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
       
                </LanguageContext.Provider>
            </div>
        );
    }
}
