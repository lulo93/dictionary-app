import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Hello world</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/lulo93/dictionary-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Source
            </a>{" "}
            code by Luisa Rua Estrada
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
