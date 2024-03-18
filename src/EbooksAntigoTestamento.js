import React from "react";

function EbooksAntigoTestamento(props) {
  return (
    <div>
      <h2>Antigo Testamento</h2>
      <ul>
        {props.antigoTestamento.map((livro) => (
          <li key={livro}>{livro}</li>
        ))}
      </ul>
    </div>
  );
}

export default EbooksAntigoTestamento;