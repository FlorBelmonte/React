import { useState } from "react";

//ejercicio 4 eliminar estado innecesario 

export default function FeedbackForm2() {
    let name = '';     //elimine la variable de estado y declare la variable con let 

    function handleClick() {
      name = (prompt('¿Cuál es tu nombre?'));  //la reemplacé en el Promp, en el lugar del setName
      alert(`Hola, ${name}!`);
    }
  
    return (
      <button onClick={handleClick}>
        Saludar
      </button>
    );
  }
  