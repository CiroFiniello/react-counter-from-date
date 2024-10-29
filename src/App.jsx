import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  //utilizzo lo state per il primo bottone
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="passi">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <h3>Step:{step}</h3>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="passi">
        <button onClick={() => setCount((s) => s - 1)}>-</button>
        <h3>Count:{count}</h3>
        <button onClick={() => setCount((s) => s + 1)}>+</button>
      </div>
      <h2>30 giorni da oggi sarà giovedì 21 2025</h2>
    </div>
  );
}

export default App;
