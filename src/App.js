import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/lulo93/dictionary-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open source
            </a>{" "}
            code by Luisa Rua Estrada
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
