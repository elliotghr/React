import React, { Component } from "react";

function PintaNanos(props) {
  return <li>{props.el}</li>;
}

export default class Prueba extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Nanos: ["Nano", "Mosho", "Cricri", "Peluche"],
    };
  }

  render() {
    return (
      <div>
        <h2>Prueba</h2>
        <h3>Nanos</h3>
        <h4>{this.props.descripcion}</h4>
        <ol>
          {this.state.Nanos.map((el, index) => (
            <PintaNanos key={index} el={el} />
          ))}
        </ol>
      </div>
    );
  }
}
