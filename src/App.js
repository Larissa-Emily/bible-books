import React, { useState } from "react";
import "./App.css";
import booksData from "./books.json";
import Greeting from "./Greeting.js";

function App() {
  const { antigoTestamento, novoTestamento } = booksData;
  const [nomeLivro, setNomeLivro] = useState("");

  function handleEbook() {
    const allBooks = [...antigoTestamento, ...novoTestamento];
    const selectEbook = allBooks[Math.floor(Math.random() * allBooks.length)];
    setNomeLivro(selectEbook);
  }

  return (
    <div className="App">
      <h1>
        <Greeting />
      </h1>
      <h2>Qual será o livro de hoje?</h2>
      <button onClick={handleEbook}>Ver</button>
      {nomeLivro && (
        <div>
          <h3>Selecionado: {nomeLivro}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
