import { useState } from "react";
import "./styles.css";

function App() {
  const [bill, setBill] = useState("");
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function averageTip() {
    const val = (friendTip + yourTip) / 2 / 100;
    return bill * val;
  }

  return (
    <div className="App">
      <BillComponent bill={bill} setBill={setBill} />
      <SelectPercentage tip={yourTip} setTip={setYourTip}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage tip={friendTip} setTip={setFriendTip}>
        How did your friend like the service?
      </SelectPercentage>
      {bill && <Result bill={bill} tip={averageTip()} />}
      <Reset setBill={setBill} />
    </div>
  );
}

function Reset({ setBill }) {
  return <button onClick={() => setBill("")}>Reset</button>;
}

function Result({ bill, tip }) {
  return <h1>{`You pay ${Number(bill) + tip}($${bill} + $${tip} tip)`}</h1>;
}

function BillComponent({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}

function SelectPercentage({ tip, setTip, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value="0">Disatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}
export default App;
