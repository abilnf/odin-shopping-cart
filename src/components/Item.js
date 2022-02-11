import { useState } from "react";
import "../styles/Item.css";

function Item(props) {
  const [amount, setAmount] = useState(1);
  return (
    <div className="Item">
      <h2>{props.name}</h2>
      <img src={require(`../assets/nfts/${props.nft}.jpg`)} alt="" />
      <h3>{props.price}K</h3>
      <div className="add-to-cart-container">
        <button onClick={() => setAmount(Math.max(amount - 1, 1))}>-</button>
        <input
          onInput={(e) => (e.target.value = e.target.value.slice(0, 1))}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          value={amount}
          min={1}
          max={9}
        />
        <button onClick={() => setAmount(Math.min(amount + 1, 9))}>+</button>
        <button onClick={() => props.addToCart(amount)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
