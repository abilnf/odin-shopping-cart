import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import shopping_cart from "./assets/shopping_cart.svg";
import { createContext, useState } from "react";
import Cart from "./pages/Cart";
import uniqid from "uniqid";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <Link to="/">HOME</Link>
          <Link to="/shop">SHOP</Link>
          <Link to="/cart">
            <div className="cart-icon-container">
              <img src={shopping_cart} alt="Shopping Cart" />
              {items.length > 0 && <p>{items.length}</p>}
            </div>
          </Link>
        </div>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route
              path="shop"
              element={
                <Shop
                  addToCart={(nft, amount) =>
                    setItems(items.concat({ nft, amount, id: uniqid() }))
                  }
                />
              }
            />
            <Route
              path="cart"
              element={<Cart clearCart={() => setItems([])} items={items} />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
