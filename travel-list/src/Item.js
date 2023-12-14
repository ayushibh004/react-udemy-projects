export function Item({ item }) {
  return (
    <li>
      <span>
        {item.quantity}
        {item.description}
        <button></button>
      </span>
    </li>
  );
}
