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



  return (
    <div className="Phonetic">
        
        <button onClick={() => callSound(soundSrc)}>
          
          Listen
        </button>
        
      {props.phonetic.text}
    </div>
  );
  
  
 
  
  
}