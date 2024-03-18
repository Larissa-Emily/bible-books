import React from "react";

function EbooksNovoTestamento(props) {
  return (
    <div>
      <h2>Novo Testamento</h2>
      <ul>
        {props.novoTestamento.map((livro) => (
          <li key={livro}>{livro}</li>
        ))}
      </ul>
    </div>
  );
}

export default EbooksNovoTestamento;
