import React, { useState } from "react";

export default function ContadorHooks(props) {
  // Variable de estado
  // variable contador, función que lo actualiza setContador, valor inicial
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  // console.log(useState());
  return (
    <>
      <h2>Hooks- useState</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <p>Contador de {props.titulo}</p>
      <h3>{contador}</h3>
    </>
  );
}

ContadorHooks.defaultProps = {
  titulo: "Clicks",
};
