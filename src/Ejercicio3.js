import { useState } from "react";

//ejercicio 3 Arregla un error 
//como los hooks no se pueden usar dentro de condicionales, lo saqué del If y lo coloqué arriba junto con la otra variable de estado 

export default function FeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');

    if (isSent) {
      return <h1>¡Gracias!</h1>;
    } 
      return (
        <form onSubmit={e => {
          e.preventDefault();
          alert(`Sending: "${message}"`);
          setIsSent(true);
        }}>
          <textarea
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <br />
          <button type="submit">Enviar</button>
        </form>
      );
    }

  
  