import { useState } from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 2, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems([...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} /> {/* convention to call props this */}
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🥥</h1>;
}

function Form({ onAddItems }) {
  //FIRST step for controlled elements
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //submit handler -> when the submit happens, it passes an event object(all info about current event(same as vanilla JS))
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    //resetting the form
    setDescription("");
    setQuantity(1);
  }

  //  react calls the function for us when the onSubmit event happens(when the button is clicked)
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 💼</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))} //can see these values using react dev tools
      >
        {Array.from({ length: 20 }, (_, i) => i).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* SECOND step for controlled elements */}
      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value); //THIRD step of controlled elements
        }}
        //THIRD step
      />
      <button>Add</button>
    </form>
  );
}

// using ul to ensure that we are using semantic HTML
// anything that maps over a list requires the key prop in order for react to efficiently update and track it
function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button>❌</button>
      </span>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
