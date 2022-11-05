import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="container">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index) {
          return (
            <div key={index}>
              <p>
                <ul className="definition">
                  <li>
                    {definition.definition}
                    <div className="example text-muted">
                      {definition.example}
                    </div>
                  </li>
                </ul>
              </p>
            </div>
          
          );
        })}
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
  
}