import React, { useEffect, useState } from "react";

export default function Todo(props) {
  const [lista] = useState(["Tarefa 1", "Tarefa 2", "Tarefa 3"]);
  const [elemento, setElemento] = useState("");
  const [addElemento, setElementoNovo] = useState();
  return (
    <>
      <h1>Tarefas</h1>
      <form
        onSubmit={(event) => {
          setElementoNovo(lista.push(elemento));
          event.preventDefault();
        }}
      >
        <ul>
          {lista.map((item, index) => {
            return (
              <li key={index}>
                {item} <input type="checkbox"></input>
              </li>
            );
          })}
        </ul>
        <a>O que precisa ser feito?</a>
        <input
          name="elemento"
          type="text"
          onChange={(event) => setElemento(event.target.value)}
          placeholder=""
        ></input>
        <input type="submit" value="Adicionar #4" />
      </form>
    </>
  );
}
