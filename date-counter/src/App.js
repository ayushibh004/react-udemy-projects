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

  function onChangeCount(e) {
    setCount(Number(e.target.value));
    const now = new Date();
    now.setDate(now.getDate() + Number(e.target.value));
    setDate(now);
  }

  return (
    <div>
      {/* STEP */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "10px",
        }}
      >
        {/* currently an uncontrolled element, make them controlled */}
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <label>{step}</label>
      </div>

      {/* COUNT */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "10px",
        }}
      >
        <button onClick={subtractCount}>-</button>
        <input
          type="text"
          required
          minLength="0"
          maxLength="4"
          value={count}
          onChange={(e) => onChangeCount(e)}
        ></input>
        <button onClick={addCount}>+</button>
      </div>

      {/* TEXT */}
      <p>
        <b>
          {count > 0 && `${count} days from today is ${date.toDateString()}`}
          {count < 0 &&
            `${Math.abs(count)} days ago was ${date.toDateString()}`}
          {count === 0 && `Today is ${date.toDateString()}`}
        </b>
      </p>
    </div>
  );
}

export default App;
