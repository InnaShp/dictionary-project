import React from "react";
import { Howl } from "howler";

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
          
          <button onClick={() => callSound(soundSrc)}>
            
            Listen
          </button>
          
        {props.phonetic.text}
      </div>
    );
  } else {
    return null;
  }
  
  
  
 
  
  
}