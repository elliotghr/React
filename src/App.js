import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let nombre = "Elliot",
    estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" />
        <p>{nombre}</p>
        <p>{2 + 1}</p>
        <p>
          {/*A la inserción del DOM debe haber un identificador unico*/}
          {estaciones.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
