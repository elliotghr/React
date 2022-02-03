import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <section>
        {/* <Componente></Componente> */}
        {/* <Componente msg="Hola soy un componente desde una prop" /> */}
        {/* <Componente msg="Hola soy un componente Funcional desde una prop" /> */}
        <Componente msg="Hola soy un componente Funcional Expresado desde una prop" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
}

export default App;
