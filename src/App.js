import React from "react";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <Dictionary defaultWord="sunset" />
      <footer>Coded by Inna Shpachynska</footer>
    </div>
  );
}


