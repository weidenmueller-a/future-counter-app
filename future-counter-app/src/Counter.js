import React, { useState } from 'react';
import './App.css';

function Counter() {
  // 1️⃣ Counter State anlegen
  const [count, setCount] = useState(0);

  // 2️⃣ Funktionen definieren
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  // 3️⃣ Dein Layout bleibt (hier verwenden wir jetzt {count})
  return (
    <div className="counter-container">
      <div className="main-title">
      </div>

      <div className="counter-container__display">
        <p id="counter-value">{count}</p>
      </div>

      <div className="counter-container__controls">
        <button
          className="counter-container__buttons increment-button"
          onClick={handleIncrement}
        >
          Increment
        </button>

        <button
          className="counter-container__buttons decrement-button"
          onClick={handleDecrement}
        >
          Decrement
        </button>

        <button
          className="counter-container__buttons reset-button"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
