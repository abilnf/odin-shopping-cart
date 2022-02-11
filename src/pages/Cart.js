import "../styles/Cart.css";
function Cart(props) {
  return (
    <div className="Cart">
      <h1>
        {props.items.length > 0
          ? "Your order:"
          : "Your Shopping Cart is empty!"}
      </h1>
      {props.items.length > 0 && (
        <div className="cart-items">
          {props.items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={require(`../assets/nfts/${item.nft.nft}.jpg`)} alt="" />
              <h2>{item.nft.name}</h2>
              <p>{item.nft.price}K</p>
              <p>x{item.amount}</p>
              <p>{item.nft.price * item.amount}K</p>
            </div>
          ))}
          <div className="cart-item">
            <div></div>
            <h2>Total</h2>
            <div></div>
            <div></div>
            <p>
              {props.items.reduce(
                (sum, item) => sum + item.nft.price * item.amount,
                0
              )}
              K
            </p>
          </div>
          <button onClick={props.clearCart} className="checkout">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
