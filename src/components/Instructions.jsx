import React from "react";
import Logo from "../images/logo-waco.svg";
import "../styles/Instrucciones.scss";

export default function Instructions(props) {
  return (
    <>
      <figure>
        <img src={Logo} alt="Waco Hub" />
      </figure>
      <h3 className="title">Prueba Tecnica de React + Redux</h3>
      <strong>Instrucciones:</strong>
      <ol className="instructions">
        <li>
          Este proyecto cuenta con una configuración del store de redux base,
          pero hacen falta algunos cambios. Verifique que le hace falta e
          implemente.
        </li>
        <li>Terminar de conectar el componente App con el store de redux.</li>
        <li>
          Realice el consumo a la api{" "}
          <a href="https://rickandmortyapi.com/documentation/#filter-characters">
            https://rickandmortyapi.com/documentation/#filter-characters
          </a>{" "}
          con lo ya existente en el proyecto y permitirle filtrar por el nombre,
          muestre con ayuda del componente <strong>CharacterList</strong> la
          información consultada.
        </li>
        <li>
          El estilo es libre,se puede realizar implementando Material Ui o SASS.
        </li>
      </ol>
    </>
  );
}
