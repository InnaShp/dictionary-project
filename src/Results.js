import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
 if(props.results) {
  return (
    <div className="Results">
      <div className="container">
      <h2>{props.results.word}</h2> 
        <div className="pronunciation">
          {props.results.phonetics.map(function(phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </div>
      </div>
      {props.results.meanings.map(function(meaning, index) {
        return (
          <div key={index}> 
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  )
 } else {
  return null;
 }
}