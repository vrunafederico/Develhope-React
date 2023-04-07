import React from "react";
import { LanguageContext } from "./LanguageContext";

export class Language extends React.Component {
    render() {
        return (
            <LanguageContext.Consumer>
                {(language) => {
                    return <div>{language}</div>;
                }}
            </LanguageContext.Consumer>
        );
    }
}

