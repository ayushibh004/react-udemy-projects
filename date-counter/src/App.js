import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  function addCount() {
    setCount(count + step);
    date.setDate(date.getDate() + step);
    setDate(date);
  }

  function subtractCount() {
    setCount(count - step);
    date.setDate(date.getDate() - step);
    setDate(date);
  }

  return (
    <div>
      {/* STEP */}
      <div style={{ display: "flex" }}>
        <button onClick={() => setStep(step - 1)}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>

      {/* COUNT */}
      <div style={{ display: "flex" }}>
        <button onClick={subtractCount}>-</button>
        <p>Count: {count}</p>
        <button onClick={addCount}>+</button>
      </div>

      {/* TEXT */}
      <p>
        {count > 0 && `${count} days from today is ${date}`}
        {count < 0 && `${Math.abs(count)} days ago was ${date}`}
        {count === 0 && `Today is ${date}`}
      </p>
    </div>
  );
}

export default App;
