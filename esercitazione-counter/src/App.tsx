import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [lap, setLap] = useState(0);

  // Array di numeri inizializzato come un array vuoto
  const [countTime, setCountTime] = useState<number[]>([]);

  /**
   * Funzione per incrementare il valore del contatore 'count' di 1
   */
  function counter() {
    setCount(count + 1);
  }

  /**
   * Funzione per incrementare il valore del contatore 'lap' di 1 se il contatore 'count è pari
   */
  function counterLap() {
    // Verifica se il contatore 'count' è pari
    if (count % 2 === 0) {
      setLap(lap + 1);
    }
  }

  /**
   * Funzione per aggiungere all'array 'time' la data corrente
   */
  function addArray() {
    setCountTime([...countTime, Date.now()]);
  }

  return (
    <>
      <p>Lap: {lap}</p>
      <p>Count: {count}</p>

      {/* Bottone per aumentare il count ad ogni click*/}
      <button
        onClick={() => {
          counter();
          counterLap();
          addArray();
        }}
      >
        +1
      </button>

      {/* Lista con le date dei click dei click */}
      <ul>
        {countTime.map((currentTime, index) => {
          return <li key={index}>{new Date(currentTime).toLocaleString()}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
