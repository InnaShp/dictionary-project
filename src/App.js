import React from "react";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <Dictionary defaultWord="sunset" />
      <footer className="mt-3 mb-5">
          This project was coded by Inna Shpachynska and is{" "}
          <a
            href="https://github.com/InnaShp/dictionary-project" 
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://marvelous-cocada-58b02c.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            hosted on Netlify
          </a>
        </footer>
    </div>
  );
}


