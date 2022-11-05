import React from "react";
import { Howl } from "howler";
import "./Phonetic.css";

export default function Phonetic(props) {
  const soundSrc = `${props.phonetic.audio}`;
  function callSound(src) {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  }


  if (props.phonetic.audio && props.phonetic.text) {
    return (
      <div className="Phonetic">
        <button onClick={() => callSound(soundSrc)} className="sound">
          <i class="fa-solid fa-volume-high"></i>
        </button>
        <div className="text">{props.phonetic.text}</div> 
      </div>
    );
  } else {
    return null;
  }
  
  
  
 
  
  
}