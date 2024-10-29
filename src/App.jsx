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
  return (
    <div>
      <div className="passi">
        <button>-</button>
        <h3>Step:5</h3>
        <button>+</button>
      </div>
      <div className="passi">
        <button>-</button>
        <h3>Count:30</h3>
        <button>+</button>
      </div>
      <h2>30 giorni da oggi sarà giovedì 21 2025</h2>
    </div>
  );
}

export default App;
