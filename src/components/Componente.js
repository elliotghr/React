import React, { Component } from "react";

// // Componente funcional
// function Componente(props) {
//   // Aqui no se usa this
//   return <h2>{props.msg}</h2>;
// }

// // Componente funcional en formato de función expresada con arrow function
const Componente = (props) => <h2>{props.msg}</h2>;

// // Componente basado en clases
// class Componente extends Component {
//   // Un componente de clase debe tener su metodo render
//   render() {
//     //   Hacemos uso de las props
//     // Es un objeto desde el this de la clase y el atributo que estoy mandando
//     return <h2>{this.props.msg}</h2>;
//   }
// }

export default Componente;
